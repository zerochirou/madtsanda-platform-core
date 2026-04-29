import Teacher from '#models/teacher'

interface TeacherServiceContract {
  createTeacher(data: Partial<Teacher>): Promise<Teacher>
  updateTeacher(id: string, data: Partial<Teacher>): Promise<Teacher>
  updateTeacherByUser(id: string, data: Partial<Teacher>): Promise<Teacher>
  destroyTeacherByUser(id: string): Promise<void>
  destroyTeacher(id: string): Promise<void>
  getAllTeacher(): Promise<Teacher[]>
  getTeacherByID(id: string): Promise<Teacher>
  getTeacherByUserID(id: string): Promise<Teacher>
}

export class TeacherService implements TeacherServiceContract {
  public async createTeacher(data: Partial<Teacher>): Promise<Teacher> {
    const teacher = await Teacher.create(data)

    return teacher
  }

  public async updateTeacherByUser(id: string, data: Partial<Teacher>): Promise<Teacher> {
    const teacher = await Teacher.findByOrFail('user_id', id)
    teacher.merge(data)
    await teacher.save()

    return teacher
  }

  public async updateTeacher(id: string, data: Partial<Teacher>): Promise<Teacher> {
    const teacher = await Teacher.findOrFail(id)
    teacher.merge(data)
    await teacher.save()

    return teacher
  }

  public async destroyTeacherByUser(id: string): Promise<void> {
    const teacher = await Teacher.findByOrFail('user_id', id)

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
