import { ResearchSchema } from '#database/schema'
import { beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import ResearchTag from './research_tag.ts'
import { randomUUID } from 'node:crypto'

export default class Research extends ResearchSchema {
  @column()
  declare researchTagId: string

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => ResearchTag)
  declare researchTag: BelongsTo<typeof ResearchTag>

  @beforeCreate()
  public static assignUuid(research: Research) {
    research.id = randomUUID()
  }
}
