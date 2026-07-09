import { adminAccessControll } from '#abilities/main'
import { ResearchService } from '#services/research_service'
import ResearchTransformer from '#transformers/research_transformer'
import { createResearchValidator, updateResearchValidator } from '#validators/research'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class ResearchController {
  constructor(protected researchService: ResearchService) {}

  private async adminAccessControll(ctx: HttpContext) {
    if (await ctx.bouncer.denies(adminAccessControll)) {
      ctx.response.forbidden('You cannot edit this')
      return false
    }

    return true
  }

  public async showAllResearchByPaginate(ctx: HttpContext) {
    const page = ctx.request.input('page')
    const research = await this.researchService.findResearchByPaginate(page)
    const metadata = research.getMeta()

    return ctx.serialize(ResearchTransformer.paginate(research, metadata))
  }

  public async submitResearch(ctx: HttpContext) {
    if (!(await this.adminAccessControll(ctx))) return

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
    const query = String(ctx.request.input('q') ?? ctx.request.input('query') ?? '').trim()

    if (!query) {
      return ctx.serialize(ResearchTransformer.transform([]))
    }

    const research = await this.researchService.findResearchBySearch(query)

    return ctx.serialize(ResearchTransformer.transform(research))
  }

  public async showResearchByUserId(ctx: HttpContext) {
    const userId = ctx.request.param('id')
    const research = await this.researchService.findResearchByUserId(userId)

    return ctx.serialize(ResearchTransformer.transform(research))
  }

  public async editResearch(ctx: HttpContext) {
    if (!(await this.adminAccessControll(ctx))) return

    const id = ctx.request.param('id')
    const payload = await ctx.request.validateUsing(updateResearchValidator)
    const updatedResearch = await this.researchService.updateResearch(id, payload)

    return ctx.serialize(ResearchTransformer.transform(updatedResearch))
  }

  public async destroyResearch(ctx: HttpContext) {
    if (!(await this.adminAccessControll(ctx))) return

    const id = ctx.request.param('id')
    await this.researchService.destroyResearch(id)

    return ctx.serialize({
      message: 'Research was deleted successfully',
    })
  }
}
