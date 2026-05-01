import type { HttpContext } from '@adonisjs/core/http'
import { StudentService } from '#services/student_service'
import { inject } from '@adonisjs/core'
import StudentTransformer from '#transformers/student_transformer'
import { createStudentValidator, updateStudentValidator } from '#validators/student'

@inject()
export default class StudentsController {
  constructor(protected studentService: StudentService) {}

  public async showAllStudent(ctx: HttpContext) {
    const students = await this.studentService.getAllStudent()

    return ctx.serialize(StudentTransformer.transform(students))
  }

  public async showStudentByID(ctx: HttpContext) {
    const id = ctx.request.param('id')
    const students = await this.studentService.getStudentByID(id)

    return ctx.serialize(StudentTransformer.transform(students))
  }

  public async showStudentByUserID(ctx: HttpContext) {
    const id = ctx.request.param('id')
    const students = await this.studentService.getStudentByUserID(id)

    return ctx.serialize(StudentTransformer.transform(students))
  }

  public async submitStudent(ctx: HttpContext) {
    const payload = await ctx.request.validateUsing(createStudentValidator)
    const student = await this.studentService.createStudent(payload)

    return ctx.serialize(StudentTransformer.transform(student))
  }

  public async editStudent(ctx: HttpContext) {
    const { id } = ctx.auth.getUserOrFail()
    const payload = await ctx.request.validateUsing(updateStudentValidator)
    const updatedStudent = await this.studentService.updateStudent(id, payload)

    return ctx.serialize(StudentTransformer.transform(updatedStudent))
  }

  public async editStudentByID(ctx: HttpContext) {
    const id = await ctx.request.param('id')
    const payload = await ctx.request.validateUsing(updateStudentValidator)
    const updatedStudent = await this.studentService.updateStudentByUserID(id, payload)

    return ctx.serialize(StudentTransformer.transform(updatedStudent))
  }

  public async destroyStudent(ctx: HttpContext) {
    const { id } = ctx.auth.getUserOrFail()
    await this.studentService.destroyStudent(id)

    return ctx.serialize({
      message: 'student was deleted',
    })
  }

  public async destroyStudentByID(ctx: HttpContext) {
    const id = await ctx.request.param('id')
    await this.studentService.destroyStudent(id)

    return ctx.serialize({
      message: 'student was deleted',
    })
  }
}
