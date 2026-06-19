import { BaseTransformer } from '@adonisjs/core/transformers'
import type Library from '#models/library'

export default class LibraryTransformer extends BaseTransformer<Library> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'title',
      'author',
      'category',
      'year',
      'available',
      'description',
      'createdAt',
      'updatedAt',
    ])
  }
}
