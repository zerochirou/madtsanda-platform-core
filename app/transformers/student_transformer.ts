import { BaseTransformer } from '@adonisjs/core/transformers'
import type Student from '#models/student'

export default class StudentTransformer extends BaseTransformer<Student> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'nis',
      'gender',
      'nisn',
      'address',
      'ttl',
      'phone',
      'status',
      'grade',
      'class',
      'profileKey',
      'profileUrl',
      'user',
    ])
  }
}
