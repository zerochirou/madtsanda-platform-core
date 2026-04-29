import { BaseTransformer } from '@adonisjs/core/transformers'
import type NewsCategory from '#models/news_category'

export default class NewsCategoryTransformer extends BaseTransformer<NewsCategory> {
  toObject() {
    return this.pick(this.resource, ['id', 'category'])
  }
}
