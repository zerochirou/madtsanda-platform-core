import { UserSchema } from '#database/schema'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { type AccessToken, DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { beforeCreate, hasMany } from '@adonisjs/lucid/orm'
import News from './news.ts'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { randomUUID } from 'node:crypto'
import Student from './student.ts'
import Teacher from './teacher.ts'
import Annnouncement from './annnouncement.ts'
import Research from './research.ts'

export default class User extends compose(UserSchema, withAuthFinder(hash)) {
  static accessTokens = DbAccessTokensProvider.forModel(User)
  declare currentAccessToken?: AccessToken

  get initials() {
    const [first, last] = this.username ? this.username.split(' ') : this.email.split('@')
    if (first && last) {
      return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase()
    }
    return `${first.slice(0, 2)}`.toUpperCase()
  }

  @hasMany(() => Student)
  declare student: HasMany<typeof Student>

  @hasMany(() => Teacher)
  declare teacher: HasMany<typeof Teacher>

  @hasMany(() => Annnouncement)
  declare announcement: HasMany<typeof Annnouncement>

  @hasMany(() => News)
  declare news: HasMany<typeof News>

  @hasMany(() => Research)
  declare research: HasMany<typeof Research>

  @beforeCreate()
  public static assignUuid(user: User) {
    user.id = randomUUID()
  }
}
