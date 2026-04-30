import vine from '@vinejs/vine'

const createNewsCategoryValidator = vine.create({
  category: vine.string(),
})

const updateNewsCategoryValidator = vine.create({
  category: vine.string().optional(),
})

export { createNewsCategoryValidator, updateNewsCategoryValidator }
