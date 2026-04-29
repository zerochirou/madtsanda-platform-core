import User from '#models/user'
import type { createUserValidator, updateUserValidator } from '#validators/user'
import type { AccessToken } from '@adonisjs/auth/access_tokens'
import type { Infer } from '@vinejs/vine/types'

interface UserServiceContract {
  getAlluser(): Promise<User[]>
  createUser(data: Infer<typeof createUserValidator>): Promise<[AccessToken, User]>
  updateUser(id: string, data: Infer<typeof updateUserValidator>): Promise<User>
  removeUser(id: string): Promise<void>
}

export class UserService implements UserServiceContract {
  public async getAlluser(): Promise<User[]> {
    return await User.all()
  }

  public async createUser(data: Infer<typeof createUserValidator>): Promise<[AccessToken, User]> {
    const user = await User.create(data)
    const token = await User.accessTokens.create(user)

    return [token, user]
  }

  public async updateUser(id: string, data: Infer<typeof updateUserValidator>): Promise<User> {
    const user = await User.findOrFail(id)
    user.merge(data)
    await user.save()

    return user
  }

  public async removeUser(id: string): Promise<void> {
    const user = await User.findOrFail(id)

    await user.delete()
  }
}
