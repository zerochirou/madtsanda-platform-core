import vine from '@vinejs/vine'

const createResearchValidator = vine.create({
  title: vine.string().unique({ table: 'research', column: 'title' }),
  abstrack: vine.string().unique({ table: 'research', column: 'abstrack' }),
  document: vine.file({
    size: '50mb',
    extnames: ['pdf', 'doc', 'docx', '.tex'],
  }),
  published_date: vine.date(),
  status: vine.enum(['pending', 'has_done']),
  user_id: vine.string().uuid(),
  researchTagId: vine.string().uuid(),
})

const updateResearchValidator = vine.create({
  title: vine.string().optional(),
  abstrack: vine.string().optional(),
  document: vine
    .file({
      size: '50mb',
      extnames: ['pdf', 'doc', 'docx', '.tex'],
    })
    .optional(),
  published_date: vine.date().optional(),
  status: vine.enum(['pending', 'has_done']).optional(),
  user_id: vine.string().uuid().optional(),
  researchTagId: vine.string().uuid().optional(),
})

export { createResearchValidator, updateResearchValidator }
