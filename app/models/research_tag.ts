import { ResearchTagSchema } from '#database/schema'
import { beforeCreate, hasMany } from '@adonisjs/lucid/orm'
import { randomUUID } from 'node:crypto'
import Research from './research.ts'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class ResearchTag extends ResearchTagSchema {
  @hasMany(() => Research)
  declare research: HasMany<typeof Research>

  @beforeCreate()
  public static assignUuid(researchTag: ResearchTag) {
    researchTag.id = randomUUID()
  }
}
