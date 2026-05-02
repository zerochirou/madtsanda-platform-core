import { BaseTransformer } from '@adonisjs/core/transformers'
import type ResearchTag from '#models/research_tag'

export default class ResearchTagTransformer extends BaseTransformer<ResearchTag> {
  toObject() {
    return this.pick(this.resource, ['id', 'category', 'createdAt', 'updatedAt'])
  }
}
