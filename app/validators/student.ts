import vine from '@vinejs/vine'

const createStudentValidator = vine.create({
  nisn: vine.string().unique({ table: 'students', column: 'nisn' }),
  nis: vine.string().unique({ table: 'students', column: 'nisn' }),
  grade: vine.string(),
  class: vine.string(),
  profile: vine.file({
    size: '10mb',
    extnames: ['jpg', 'png', 'jpeg'],
  }),
  gender: vine.enum(['female', 'male']),
  ttl: vine.string(),
  status: vine.enum(['active', 'graduate', 'DO']),
  phone: vine.string(),
  address: vine.string(),
  userId: vine.string().uuid(),
})

const updateStudentValidator = vine.create({
  nisn: vine.string().unique({ table: 'students', column: 'nisn' }).optional(),
  nis: vine.string().unique({ table: 'students', column: 'nisn' }).optional(),
  grade: vine.string().optional(),
  class: vine.string().optional(),
  profile: vine
    .file({
      size: '10mb',
      extnames: ['jpg', 'png', 'jpeg'],
    })
    .optional(),
  gender: vine.enum(['male', 'female']).optional(),
  ttl: vine.string().optional(),
  status: vine.enum(['active', 'graduate', 'DO']).optional(),
  phone: vine.string().optional(),
  address: vine.string().optional(),
  userId: vine.string().uuid().optional(),
})

export { createStudentValidator, updateStudentValidator }
