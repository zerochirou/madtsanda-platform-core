import type { HttpContext } from '@adonisjs/core/http'
import { TeacherService } from '#services/teacher_service'
import { inject } from '@adonisjs/core'
import TeacherTransformer from '#transformers/teacher_transformer'
import { createTeacherValidator, updateTeacherValidator } from '#validators/teacher'
import { adminAccessControll } from '#abilities/main'

@inject()
export default class TeachersController {
  constructor(protected teacherService: TeacherService) {}

  private async adminAccessControll(ctx: HttpContext) {
    if (await ctx.bouncer.denies(adminAccessControll)) {
      return ctx.response.forbidden('You cannot edit this')
    }
  }

  public async showAllTeacher(ctx: HttpContext) {
    const teachers = await this.teacherService.getAllTeacher()
    return ctx.serialize(TeacherTransformer.transform(teachers))
  }

  public async showTeacherByID(ctx: HttpContext) {
    const id = ctx.request.param('id')
    const teacher = await this.teacherService.getTeacherByID(id)

    return ctx.serialize(TeacherTransformer.transform(teacher))
  }

  public async showTeacherWithToken(ctx: HttpContext) {
    const { id } = ctx.auth.getUserOrFail()
    const teacher = await this.teacherService.getTeacherByUserID(id)

    return ctx.serialize(TeacherTransformer.transform(teacher))
  }

  public async showTeacherByUserID(ctx: HttpContext) {
    const id = ctx.request.param('id')
    const teacher = await this.teacherService.getTeacherByUserID(id)

    return ctx.serialize(TeacherTransformer.transform(teacher))
  }

  public async submitTeacher(ctx: HttpContext) {
    const payload = await ctx.request.validateUsing(createTeacherValidator)
    const teacher = await this.teacherService.createTeacher(payload)

    await this.adminAccessControll(ctx)

    return ctx.serialize(TeacherTransformer.transform(teacher))
  }

  public async editTeacher(ctx: HttpContext) {
    const { id } = ctx.auth.getUserOrFail()
    const payload = await ctx.request.validateUsing(updateTeacherValidator)
    const updatedTeacher = await this.teacherService.updateTeacherByUser(id, payload)

    await this.adminAccessControll(ctx)

    return ctx.serialize(TeacherTransformer.transform(updatedTeacher))
  }

  public async editTeacherByID(ctx: HttpContext) {
    const id = ctx.request.param('id')
    const payload = await ctx.request.validateUsing(updateTeacherValidator)
    const updatedTeacher = await this.teacherService.updateTeacher(id, payload)

    await this.adminAccessControll(ctx)

    return ctx.serialize(TeacherTransformer.transform(updatedTeacher))
  }

  public async destroyTeacher(ctx: HttpContext) {
    const { id } = ctx.auth.getUserOrFail()
    await this.teacherService.destroyTeacherByUserId(id)

    await this.adminAccessControll(ctx)

    return ctx.serialize({
      message: 'Teacher was deleted successfully',
    })
  }

  public async destroyTeacherByID(ctx: HttpContext) {
    const id = ctx.request.param('id')
    await this.teacherService.destroyTeacher(id)

    return ctx.serialize({
      message: 'Teacher was deleted successfully',
    })
  }
}
