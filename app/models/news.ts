import { NewsSchema } from '#database/schema'
import { beforeCreate, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user.ts'
import NewsCategory from './news_category.ts'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { randomUUID } from 'node:crypto'

export default class News extends NewsSchema {
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column()
  declare categoryId: string

  @belongsTo(() => NewsCategory, {
    foreignKey: 'categoryId',
  })
  declare newsCategory: BelongsTo<typeof NewsCategory>

  @beforeCreate()
  public static assignUuid(news: News) {
    news.id = randomUUID()
  }
}
