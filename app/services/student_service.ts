import Student from '#models/student'
import { createStudentValidator, updateStudentValidator } from '#validators/student'
import type { Infer } from '@vinejs/vine/types'
import { FileStorageService } from './file_storage_service.ts'
import { inject } from '@adonisjs/core'

interface StudentServiceContract {
  createStudent(student: Infer<typeof createStudentValidator>): Promise<Student>
  updateStudent(id: string, data: Infer<typeof updateStudentValidator>): Promise<Student>
  updateStudentByUserID(id: string, data: Infer<typeof updateStudentValidator>): Promise<Student>
  destroyStudent(id: string): Promise<void>
  getAllStudent(): Promise<Student[]>
  getStudentByID(id: string): Promise<Student>
  getStudentByNIS(nis: string): Promise<Student>
}

@inject()
export class StudentService implements StudentServiceContract {
  constructor(protected fileStorageService: FileStorageService) {}

  public async createStudent(data: Infer<typeof createStudentValidator>): Promise<Student> {
    const { profile, ...dataRest } = data
    const [profileKey, profileUrl] = await this.fileStorageService.profileStore(profile)
    const student = await Student.create({
      profileKey: profileKey,
      profileUrl: profileUrl,
      ...dataRest,
    })

    return student
  }

  public async updateStudent(
    id: string,
    data: Infer<typeof updateStudentValidator>
  ): Promise<Student> {
    const student = await Student.query().where('user_id', id).firstOrFail()
    const { profile, ...updateData } = data
    let newProfileUrl: string | undefined
    let newProfileKey: string | undefined

    if (profile) {
      ;[newProfileKey, newProfileUrl] = await this.fileStorageService.profileStore(profile)
      await this.fileStorageService.profileDestroy(student.profileKey)
    }

    student.merge({
      ...updateData,
      ...(data.profile ? { profileKey: newProfileKey, profileUrl: newProfileUrl } : {}),
    })

    await student.save()
    return student
  }

  public async updateStudentByUserID(
    id: string,
    data: Infer<typeof updateStudentValidator>
  ): Promise<Student> {
    const student = await Student.findOrFail(id)
    const { profile, ...updateData } = data
    let newProfileUrl: string | undefined
    let newProfileKey: string | undefined

    if (profile) {
      ;[newProfileKey, newProfileUrl] = await this.fileStorageService.profileStore(profile)
      await this.fileStorageService.profileDestroy(student.profileKey)
    }

    student.merge({
      ...updateData,
      ...(data.profile ? { profileKey: newProfileKey, profileUrl: newProfileUrl } : {}),
    })

    await student.save()
    return student
  }

  public async destroyStudent(id: string): Promise<void> {
    const student = await Student.findOrFail(id)
    await this.fileStorageService.profileDestroy(student.profileKey)
    await student.delete()
  }

  public async getAllStudent(): Promise<Student[]> {
    return await Student.query().preload('user')
  }

  public async getStudentByID(id: string): Promise<Student> {
    return await Student.query().where('id', id).preload('user').firstOrFail()
  }

  public async getStudentByNIS(nis: string): Promise<Student> {
    return await Student.query().where('nis', nis).preload('user').firstOrFail()
  }

  public async getStudentByUserID(id: string): Promise<Student> {
    return await Student.query().where('user_id', id).firstOrFail()
  }
}
