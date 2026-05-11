import type { HttpContext } from '@adonisjs/core/http'
import { AuthService } from '#services/auth_service'
import { inject } from '@adonisjs/core'
import { createLoginValidator } from '#validators/auth'
import UserTransformer from '#transformers/user_transformer'

@inject()
export default class AuthController {
  constructor(protected authService: AuthService) {}

  async login(ctx: HttpContext) {
    const payload = await ctx.request.validateUsing(createLoginValidator)
    const [token, user] = await this.authService.createAccess(payload)

    return ctx.serialize({
      token: token.value!.release(),
      user: UserTransformer.transform(user),
    })
  }

  async logout(ctx: HttpContext) {
    const user = ctx.auth.getUserOrFail()
    await this.authService.destroyAccess(user)

    return ctx.serialize({
      message: 'Logout successfully',
    })
  }

  async me({ auth, serialize }: HttpContext) {
    return serialize(UserTransformer.transform(auth.getUserOrFail()))
  }
}
