import { BaseTransformer } from '@adonisjs/core/transformers'
import type Research from '#models/research'

export default class ResearchTransformer extends BaseTransformer<Research> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'title',
      'abstrack',
      'publishedDate',
      'status',
      'documentUrl',
      'documentKey',
      'user',
      'researchTag',
      'createdAt',
      'updatedAt',
    ])
  }
}
