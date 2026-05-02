import { ResearchService } from '#services/research_service'
import ResearchTransformer from '#transformers/research_transformer'
import { createResearchValidator, updateResearchValidator } from '#validators/research'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class ResearchController {
  constructor(protected researchService: ResearchService) {}

  public async submitResearch(ctx: HttpContext) {
    const payload = await ctx.request.validateUsing(createResearchValidator)
    const research = await this.researchService.createResearch(payload)

    return ctx.serialize(ResearchTransformer.transform(research))
  }

  public async showAllResearch(ctx: HttpContext) {
    const research = await this.researchService.findAllResearch()

    return ctx.serialize(ResearchTransformer.transform(research))
  }

  public async showResearchById(ctx: HttpContext) {
    const id = ctx.request.param('id')
    const research = await this.researchService.findResearchById(id)

    return ctx.serialize(ResearchTransformer.transform(research))
  }

  public async showResearchBySearch(ctx: HttpContext) {
    // Menggunakan 'q' sebagai query parameter, misalnya: ?q=machine learning
    const query = ctx.request.input('q')
    const research = await this.researchService.findResearchBySearch(query)

    return ctx.serialize(ResearchTransformer.transform(research))
  }

  public async showResearchByUserId(ctx: HttpContext) {
    // Pastikan nama parameter di route ('id' atau 'userId') sesuai dengan yang di-binding
    const userId = ctx.request.param('id')
    const research = await this.researchService.findResearchByUserId(userId)

    return ctx.serialize(ResearchTransformer.transform(research))
  }

  public async editResearch(ctx: HttpContext) {
    const id = ctx.request.param('id')
    const payload = await ctx.request.validateUsing(updateResearchValidator)
    const updatedResearch = await this.researchService.updateResearch(id, payload)

    return ctx.serialize(ResearchTransformer.transform(updatedResearch))
  }

  public async destroyResearch(ctx: HttpContext) {
    const id = ctx.request.param('id')
    await this.researchService.destroyResearch(id)

    return ctx.serialize({
      message: 'Research was deleted successfully',
    })
  }
}
