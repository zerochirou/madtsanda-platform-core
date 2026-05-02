import vine from '@vinejs/vine'

const createResearchTagValidator = vine.create({
  category: vine.string(),
})

const updateResearchTagValidator = vine.create({
  category: vine.string().optional(),
})

export { createResearchTagValidator, updateResearchTagValidator }
