import type { HttpContext } from '@adonisjs/core/http'
import { UserService } from '#services/user_service'
import { inject } from '@adonisjs/core'
import { createUserValidator, updateUserValidator } from '#validators/user'
import { adminAccessControll } from '#abilities/main'
import UserTransformer from '#transformers/user_transformer'

@inject()
export default class UsersController {
  constructor(protected userService: UserService) {}

  private async adminAccessControll(ctx: HttpContext) {
    if (await ctx.bouncer.denies(adminAccessControll)) {
      return ctx.response.forbidden('You cannot edit this')
    }
  }

  public async showAllUser(ctx: HttpContext) {
    const users = await this.userService.getAlluser()
    return ctx.serialize(UserTransformer.transform(users))
  }

  public async submitUser(ctx: HttpContext) {
    const payload = await ctx.request.validateUsing(createUserValidator)
    const [token, user] = await this.userService.createUser(payload)

    await this.adminAccessControll(ctx)

    return ctx.serialize({
      token: token.value!.release(),
      user: UserTransformer.transform(user),
    })
  }

  public async updateUser(ctx: HttpContext) {
    const { id } = ctx.auth.getUserOrFail()
    const payload = await ctx.request.validateUsing(updateUserValidator)
    const updatedUser = await this.userService.updateUser(id, payload)

    return ctx.serialize(UserTransformer.transform(updatedUser))
  }

  public async destroyUser(ctx: HttpContext) {
    const { id } = ctx.auth.getUserOrFail()
    await this.userService.removeUser(id)

    await this.adminAccessControll(ctx)

    return ctx.serialize({
      message: 'User deleted successfully',
    })
  }
}
