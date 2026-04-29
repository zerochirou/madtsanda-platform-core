import vine from '@vinejs/vine'

const createStudentValidator = vine.create({
  nisn: vine.string(),
  nis: vine.string(),
  grade: vine.string(),
  class: vine.string(),
  profile_url: vine.string(),
  gender: vine.enum(['female', 'male']),
  ttl: vine.string(),
  status: vine.enum(['active', 'graduate', 'DO']),
  phone: vine.string(),
  address: vine.string(),
  userId: vine.string().uuid(),
})

const updateStudentValidator = vine.create({
  nisn: vine.string().optional(),
  nis: vine.string().optional(),
  grade: vine.string().optional(),
  class: vine.string().optional(),
  profile_url: vine.string().optional(),
  gender: vine.enum(['male', 'female']).optional(),
  ttl: vine.string().optional(),
  status: vine.enum(['active', 'graduate', 'DO']).optional(),
  phone: vine.string().optional(),
  address: vine.string().optional(),
  userId: vine.string().uuid().optional(),
})

export { createStudentValidator, updateStudentValidator }
