import { adminAccessControll } from '#abilities/main'
import { NewsCategoryService } from '#services/news_category_service'
import NewsCategoryTransformer from '#transformers/news_category_transformer'
import { createNewsCategoryValidator, updateNewsCategoryValidator } from '#validators/news_category'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class NewsCategoriesController {
  constructor(protected newsCategoryService: NewsCategoryService) {}

  private async adminAccessControll(ctx: HttpContext) {
    if (await ctx.bouncer.denies(adminAccessControll)) {
      return ctx.response.forbidden('You cannot edit this')
    }
  }

  public async showAllNewsCategory(ctx: HttpContext) {
    const categories = await this.newsCategoryService.findAllNewsCategory()

    return ctx.serialize(categories)
  }

  public async submitNewsCategory(ctx: HttpContext) {
    const data = await ctx.request.validateUsing(createNewsCategoryValidator)
    const category = await this.newsCategoryService.createNewsCategory(data)

    await this.adminAccessControll(ctx)

    return ctx.serialize(NewsCategoryTransformer.transform(category))
  }

  public async showNewsCategoryById(ctx: HttpContext) {
    const id = await ctx.request.param('id')
    const category = await this.newsCategoryService.findNewsCategoryById(id)

    return ctx.serialize(NewsCategoryTransformer.transform(category))
  }

  public async editNewsCategory(ctx: HttpContext) {
    const data = await ctx.request.validateUsing(updateNewsCategoryValidator)
    const id = await ctx.request.param('id')
    const category = await this.newsCategoryService.updateNewsCategory(id, data)

    await this.adminAccessControll(ctx)

    return ctx.serialize(NewsCategoryTransformer.transform(category))
  }

  public async destroyNewsCategory(ctx: HttpContext) {
    const id = await ctx.request.param('id')
    await this.newsCategoryService.deleteNewsCategory(id)

    await this.adminAccessControll(ctx)

    return ctx.serialize({ message: 'news category was deleted' })
  }
}
