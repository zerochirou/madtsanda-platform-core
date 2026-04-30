import { NewsCategorySchema } from '#database/schema'
import { beforeCreate, hasMany } from '@adonisjs/lucid/orm'
import News from './news.ts'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { randomUUID } from 'node:crypto'

export default class NewsCategory extends NewsCategorySchema {
  @hasMany(() => News)
  declare news: HasMany<typeof News>

  @beforeCreate()
  public static assignUuid(newsCategory: NewsCategory) {
    newsCategory.id = randomUUID()
  }
}
