import Teacher from '#models/teacher'
import { inject } from '@adonisjs/core'
import { FileStorageService } from './file_storage_service.ts'
import { Infer } from '@vinejs/vine/types'
import { createTeacherValidator, updateTeacherValidator } from '#validators/teacher'

interface TeacherServiceContract {
  createTeacher(data: Infer<typeof createTeacherValidator>): Promise<Teacher>
  updateTeacher(id: string, data: Infer<typeof updateTeacherValidator>): Promise<Teacher>
  updateTeacherByUser(id: string, data: Infer<typeof updateTeacherValidator>): Promise<Teacher>
  destroyTeacherByUserId(id: string): Promise<void>
  destroyTeacher(id: string): Promise<void>
  getAllTeacher(): Promise<Teacher[]>
  getTeacherByID(id: string): Promise<Teacher>
  getTeacherByUserID(id: string): Promise<Teacher>
}

@inject()
export class TeacherService implements TeacherServiceContract {
  constructor(protected fileStorageService: FileStorageService) {}

  public async createTeacher(data: Infer<typeof createTeacherValidator>): Promise<Teacher> {
    const { profile, ...dataRest } = data
    const [profileKey, profileUrl] = await this.fileStorageService.teacherProfileStore(profile)
    const teacher = await Teacher.create({
      profileKey: profileKey,
      profileUrl: profileUrl,
      ...dataRest,
    })

    return teacher
  }

  public async updateTeacherByUser(
    id: string,
    data: Infer<typeof updateTeacherValidator>
  ): Promise<Teacher> {
    const teacher = await Teacher.findByOrFail('user_id', id)
    const { profile, ...dataRest } = data
    let newProfileUrl: string | undefined
    let newProfileKey: string | undefined

    if (profile) {
      ;[newProfileKey, newProfileUrl] = await this.fileStorageService.studentProfileStore(profile)
      await this.fileStorageService.teacherProfileDestroy(teacher.profileKey)
    }

    teacher.merge({
      ...dataRest,
      ...(data.profile ? { profileKey: newProfileKey, profileUrl: newProfileUrl } : {}),
    })

    await teacher.save()

    return teacher
  }

  public async updateTeacher(
    id: string,
    data: Infer<typeof updateTeacherValidator>
  ): Promise<Teacher> {
    const teacher = await Teacher.findByOrFail('user_id', id)
    const { profile, ...dataRest } = data
    let newProfileUrl: string | undefined
    let newProfileKey: string | undefined

    if (profile) {
      ;[newProfileKey, newProfileUrl] = await this.fileStorageService.studentProfileStore(profile)
      await this.fileStorageService.teacherProfileDestroy(teacher.profileKey)
    }

    teacher.merge({
      ...dataRest,
      ...(data.profile ? { profileKey: newProfileKey, profileUrl: newProfileUrl } : {}),
    })

    await teacher.save()

    return teacher
  }

  public async destroyTeacherByUserId(id: string): Promise<void> {
    const teacher = await Teacher.findByOrFail('user_id', id)
    await this.fileStorageService.teacherProfileDestroy(teacher.profileKey)

    await teacher.delete()
  }

  public async destroyTeacher(id: string): Promise<void> {
    const teacher = await Teacher.findOrFail(id)

    await teacher.delete()
  }

  public async getAllTeacher(): Promise<Teacher[]> {
    return await Teacher.query().preload('user')
  }

  public async getTeacherByID(id: string): Promise<Teacher> {
    return await Teacher.query().where('id', id).preload('user').firstOrFail()
  }

  public async getTeacherByUserID(id: string): Promise<Teacher> {
    return await Teacher.query().where('userId', id).preload('user').firstOrFail()
  }
}
