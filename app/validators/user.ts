import vine from '@vinejs/vine'

const createUserValidator = vine.create({
  username: vine.string(),
  email: vine.string().email(),
  password: vine.string(),
  role: vine.enum(['super_user', 'student', 'teacher', 'admin']),
})

const updateUserValidator = vine.create({
  username: vine.string().optional(),
  email: vine.string().email().optional(),
  password: vine.string().optional(),
  role: vine.enum(['super_user', 'student', 'teacher', 'admin']).optional(),
})

export { createUserValidator, updateUserValidator }
