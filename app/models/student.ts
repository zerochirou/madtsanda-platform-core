import { StudentSchema } from '#database/schema'
import { beforeCreate, belongsTo } from '@adonisjs/lucid/orm'
import User from './user.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { randomUUID } from 'node:crypto'

export default class Student extends StudentSchema {
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @beforeCreate()
  public static assignUuid(student: Student) {
    student.id = randomUUID()
  }
}
