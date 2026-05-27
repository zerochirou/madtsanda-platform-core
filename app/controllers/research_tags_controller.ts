import { adminAccessControll } from '#abilities/main'
import { ResearchTagService } from '#services/research_tag_service'
import ResearchTagTransformer from '#transformers/research_tag_transformer'
import { createResearchTagValidator, updateResearchTagValidator } from '#validators/research_tag'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class ResearchTagsController {
  constructor(protected researchTagService: ResearchTagService) {}

  private async adminAccessControll(ctx: HttpContext) {
    if (await ctx.bouncer.denies(adminAccessControll)) {
      return ctx.response.forbidden('You cannot edit this')
    }
  }

  public async submitResearchTag(ctx: HttpContext) {
    const payload = await ctx.request.validateUsing(createResearchTagValidator)
    const researchTag = await this.researchTagService.createResearchTagService(payload)

    return ctx.serialize(ResearchTagTransformer.transform(researchTag))
  }

  public async showAllResearchTags(ctx: HttpContext) {
    const researchTags = await this.researchTagService.findAllResearchTagService()

    return ctx.serialize(ResearchTagTransformer.transform(researchTags))
  }

  public async showResearchTagById(ctx: HttpContext) {
    const id = ctx.request.param('id')
    const researchTag = await this.researchTagService.findResearchTagServiceById(id)

    return ctx.serialize(ResearchTagTransformer.transform(researchTag))
  }

  public async editResearchTag(ctx: HttpContext) {
    const id = ctx.request.param('id')
    const payload = await ctx.request.validateUsing(updateResearchTagValidator)
    const updatedResearchTag = await this.researchTagService.updateResearchTagService(id, payload)

    await this.adminAccessControll(ctx)

    return ctx.serialize(ResearchTagTransformer.transform(updatedResearchTag))
  }

  public async destroyResearchTag(ctx: HttpContext) {
    const id = ctx.request.param('id')
    await this.researchTagService.destroyResearchTagService(id)

    await this.adminAccessControll(ctx)

    return ctx.serialize({
      message: 'Research tag was deleted successfully',
    })
  }
}
