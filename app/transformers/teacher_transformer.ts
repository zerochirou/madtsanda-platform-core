import { BaseTransformer } from '@adonisjs/core/transformers'
import type Teacher from '#models/teacher'

export default class TeacherTransformer extends BaseTransformer<Teacher> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'name',
      'academicTitle',
      'academicHandles',
      'gender',
      'ttl',
      'address',
      'phone',
      'secondaryEmail',
      'user',
    ])
  }
}
