import { NewsSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import User from './user.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class News extends NewsSchema {
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
