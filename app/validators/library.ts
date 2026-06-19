import vine from '@vinejs/vine'

const createLibraryValidator = vine.create({
  title: vine.string(),
  author: vine.string(),
  category: vine.string(),
  year: vine.number(),
  available: vine.boolean(),
  description: vine.string().optional(),
})

const updateLibraryValidator = vine.create({
  title: vine.string().optional(),
  author: vine.string().optional(),
  category: vine.string().optional(),
  year: vine.number().optional(),
  available: vine.boolean().optional(),
  description: vine.string().optional(),
})

export { createLibraryValidator, updateLibraryValidator }
