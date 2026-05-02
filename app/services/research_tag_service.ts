import ResearchTag from '#models/research_tag'
import type {
  createResearchTagValidator,
  updateResearchTagValidator,
} from '#validators/research_tag'
import type { Infer } from '@vinejs/vine/types'

interface ResearchTagServiceContract {
  createResearchTagService(data: Infer<typeof createResearchTagValidator>): Promise<ResearchTag>
  updateResearchTagService(
    id: string,
    data: Infer<typeof updateResearchTagValidator>
  ): Promise<ResearchTag>
  destroyResearchTagService(id: string): Promise<void>
  findAllResearchTagService(): Promise<ResearchTag[]>
  findResearchTagServiceById(id: string): Promise<ResearchTag>
}

export class ResearchTagService implements ResearchTagServiceContract {
  public async createResearchTagService(
    data: Infer<typeof createResearchTagValidator>
  ): Promise<ResearchTag> {
    return await ResearchTag.create(data)
  }

  public async updateResearchTagService(
    id: string,
    data: Infer<typeof updateResearchTagValidator>
  ): Promise<ResearchTag> {
    const researchTag = await ResearchTag.findOrFail(id)
    researchTag.merge(data)
    await researchTag.save()

    return researchTag
  }

  public async destroyResearchTagService(id: string): Promise<void> {
    const researchTag = await ResearchTag.findOrFail(id)
    await researchTag.delete()
  }

  public async findAllResearchTagService(): Promise<ResearchTag[]> {
    return await ResearchTag.all()
  }

  public async findResearchTagServiceById(id: string): Promise<ResearchTag> {
    return ResearchTag.findOrFail(id)
  }
}
