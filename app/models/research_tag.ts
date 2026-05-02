import { ResearchTagSchema } from '#database/schema'
import { beforeCreate } from '@adonisjs/lucid/orm'
import { randomUUID } from 'node:crypto'

export default class ResearchTag extends ResearchTagSchema {
  @beforeCreate()
  public static assignUuid(researchTag: ResearchTag) {
    researchTag.id = randomUUID()
  }
}
