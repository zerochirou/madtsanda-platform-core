import User from '#models/user'
import type { createLoginValidator } from '#validators/auth'
import type { AccessToken } from '@adonisjs/auth/access_tokens'
import type { Infer } from '@vinejs/vine/types'
import { errors } from '@adonisjs/auth'

interface AuthServiceContract {
  createAccess(
    data: Infer<typeof createLoginValidator>
  ): Promise<{ token?: AccessToken; user?: User; success: boolean; message?: string }>
  destroyAccess(user: User): Promise<{ message: string }>
}

export class AuthService implements AuthServiceContract {
  private async generateToken(user: User): Promise<AccessToken> {
    return await User.accessTokens.create(user)
  }

  public async createAccess(
    data: Infer<typeof createLoginValidator>
  ): Promise<{ token?: AccessToken; user?: User; success: boolean; message?: string }> {
    try {
      const user = await User.verifyCredentials(data.email, data.password)
      const token = await this.generateToken(user)

      return { token, user, success: true }
    } catch (error) {
      if (error instanceof errors.E_INVALID_CREDENTIALS) {
        return {
          success: false,
          message: 'Invalid credentials',
        }
      }

      throw error
    }
  }

  public async destroyAccess(user: User): Promise<{ message: string }> {
    if (user.currentAccessToken) {
      await User.accessTokens.delete(user, user.currentAccessToken.identifier)
    }

    return {
      message: 'Logged out successfully',
    }
  }
}
