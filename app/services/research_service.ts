import { inject } from '@adonisjs/core'
import { FileStorageService } from './file_storage_service.ts'
import Research from '#models/research'
import { Infer } from '@vinejs/vine/types'
import { createResearchValidator, updateResearchValidator } from '#validators/research'
import { ModelPaginatorContract } from '@adonisjs/lucid/types/model'

interface ResearchServiceContract {
  createResearch(data: Infer<typeof createResearchValidator>): Promise<Research>
  updateResearch(id: string, data: Infer<typeof updateResearchValidator>): Promise<Research>
  destroyResearch(id: string): Promise<void>
  findAllResearch(): Promise<Research[]>
  findResearchById(id: string): Promise<Research>
  findResearchBySearch(query: string): Promise<Research[]>
  findResearchByPaginate(page: number): Promise<Research[]>
  findResearchByUserId(id: string): Promise<Research[]>
}

@inject()
export class ResearchService implements ResearchServiceContract {
  constructor(protected fileStorageService: FileStorageService) {}

  public async createResearch(data: Infer<typeof createResearchValidator>): Promise<Research> {
    const { document, ...dataRest } = data
    const [documentKey, documentUrl] = await this.fileStorageService.paperStore(document)
    const research = await Research.create({
      documentKey: documentKey,
      documentUrl: documentUrl,
      ...dataRest,
    })

    return research
  }

  public async updateResearch(
    id: string,
    data: Infer<typeof updateResearchValidator>
  ): Promise<Research> {
    const research = await Research.findOrFail(id)
    const { document, ...dataRest } = data

    let documentUrl: string | undefined
    let documentKey: string | undefined

    if (document) {
      ;[documentKey, documentUrl] = await this.fileStorageService.paperStore(document)
      await this.fileStorageService.paperDestroy(research.documentKey)
    }

    research.merge({
      ...dataRest,
      ...(document ? { documentKey: documentKey, documentUrl: documentUrl } : {}),
    })
    await research.save()

    return research
  }

  public async destroyResearch(id: string): Promise<void> {
    const research = await Research.findOrFail(id)
    await this.fileStorageService.paperDestroy(research.documentKey)
    await research.delete()
  }

  public async findAllResearch(): Promise<Research[]> {
    return await Research.query().preload('user').preload('researchTag')
  }

  public async findResearchById(id: string): Promise<Research> {
    return await Research.query()
      .preload('researchTag')
      .preload('user')
      .where('id', id)
      .firstOrFail()
  }

  public async findResearchBySearch(query: string): Promise<Research[]> {
    const research = await Research.query()
      .select('*')
      .select(
        Research.query().client.raw(
          'MATCH(title, abstrack) AGAINST(? IN NATURAL LANGUAGE MODE) AS relevance',
          [query]
        )
      )
      .whereRaw('MATCH(title, abstrack) AGAINST(? IN NATURAL LANGUAGE MODE)', [query])
      .orderBy('relevance', 'desc')

    return research
  }

  public async findResearchByPaginate(
    page: number,
    perPage: number = 6
  ): Promise<ModelPaginatorContract<Research>> {
    const research = await Research.query()
      .preload('user')
      .preload('researchTag')
      .paginate(page, perPage)

    return research
  }

  public async findResearchByUserId(id: string): Promise<Research[]> {
    return await Research.query().where('user_id', id).preload('researchTag').preload('user')
  }
}
