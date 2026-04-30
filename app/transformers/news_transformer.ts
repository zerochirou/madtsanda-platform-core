import { BaseTransformer } from '@adonisjs/core/transformers'
import type News from '#models/news'

export default class NewsTransformer extends BaseTransformer<News> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'title',
      'content',
      'pin',
      'user',
      'newsCategory',
      'categoryId',
      'imageUrl',
      'createdAt',
      'updatedAt',
    ])
  }
}
