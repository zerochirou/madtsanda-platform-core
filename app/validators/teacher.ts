import vine from '@vinejs/vine'

const createTeacherValidator = vine.create({
  name: vine.string().optional(),
  academicTitle: vine.string().optional(),
  academicHandles: vine.string().optional(),
  gender: vine.string().optional(),
  ttl: vine.string().optional(),
  address: vine.string().optional(),
  phone: vine.string().optional(),
  secondaryEmail: vine.string().email().optional(),
  userId: vine.string().uuid(),
})

const updateTeacherValidator = vine.create({
  name: vine.string().optional(),
  academicTitle: vine.string().optional(),
  academicHandles: vine.string().optional(),
  gender: vine.string().optional(),
  ttl: vine.string().optional(),
  address: vine.string().optional(),
  phone: vine.string().optional(),
  secondaryEmail: vine.string().email().optional(),
  userId: vine.string().uuid().optional(),
})

export { createTeacherValidator, updateTeacherValidator }
