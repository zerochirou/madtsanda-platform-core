import Student from '#models/student'

interface StudentServiceContract {
  createStudent(student: Student): Promise<Student>
  updateStudent(id: string, data: Student): Promise<Student>
  updateStudentByUserID(id: string, data: Student): Promise<Student>
  destroyStudent(id: string): Promise<void>
  getAllStudent(): Promise<Student[]>
  getStudentByID(id: string): Promise<Student>
  getStudentByNIS(nis: string): Promise<Student>
}

export class StudentService implements StudentServiceContract {
  public async createStudent(data: Partial<Student>): Promise<Student> {
    const student = await Student.create(data)

    return student
  }

  public async updateStudent(id: string, data: Partial<Student>): Promise<Student> {
    const student = await Student.findOrFail(id)
    student.merge(data)
    await student.save()

    return student
  }

  public async updateStudentByUserID(id: string, data: Partial<Student>): Promise<Student> {
    const student = await Student.findByOrFail('user_id', id)
    student.merge(data)
    await student.save()

    return student
  }

  public async destroyStudent(id: string): Promise<void> {
    const student = await Student.findOrFail(id)
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
