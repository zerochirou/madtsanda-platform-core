import { TeacherSchema } from '#database/schema'
import { beforeCreate, belongsTo } from '@adonisjs/lucid/orm'
import User from './user.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { randomUUID } from 'node:crypto'

export default class Teacher extends TeacherSchema {
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @beforeCreate()
  public static assignUuid(teacher: Teacher) {
    teacher.id = randomUUID()
  }
}
