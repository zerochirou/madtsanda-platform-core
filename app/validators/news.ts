import vine from '@vinejs/vine'

const createNewsValidator = vine.create({
  title: vine.string(),
  content: vine.string(),
  pin: vine.boolean(),
  image: vine.file({
    size: '10mb',
    extnames: ['jpg', 'png', 'jpeg'],
  }),
  userId: vine.string(),
  categoryId: vine.string(),
})

const updateNewsValidator = vine.create({
  title: vine.string().optional(),
  content: vine.string().optional(),
  pin: vine.boolean().optional(),
  image: vine
    .file({
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg'],
    })
    .optional(),
  userId: vine.string().optional(),
  categoryId: vine.string().optional(),
})

export { createNewsValidator, updateNewsValidator }
