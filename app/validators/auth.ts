import vine from '@vinejs/vine'

const createLoginValidator = vine.create({
  email: vine.string().email(),
  password: vine.string(),
})

export { createLoginValidator }
