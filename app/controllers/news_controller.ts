import { NewsService } from '#services/news_service'
import NewsTransformer from '#transformers/news_transformer'
import { createNewsValidator, updateNewsValidator } from '#validators/news'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class NewsController {
  constructor(protected newsService: NewsService) {}

  public async submitNews(ctx: HttpContext) {
    const payload = await ctx.request.validateUsing(createNewsValidator)
    const news = await this.newsService.createNews(payload)

    return ctx.serialize(NewsTransformer.transform(news))
  }

  public async showAllNews(ctx: HttpContext) {
    const news = await this.newsService.findAllNews()

    return ctx.serialize(NewsTransformer.transform(news))
  }

  public async showAllNewsPaginate(ctx: HttpContext) {
    const page = await ctx.request.input('page')
    const news = await this.newsService.findAllNewsPaginate(page)
    const metadata = await news.getMeta()

    return ctx.serialize(NewsTransformer.paginate(news, metadata))
  }

  public async showNewsById(ctx: HttpContext) {
    const id = await ctx.request.param('id')
    const news = await this.newsService.findNewsById(id)

    return ctx.serialize(NewsTransformer.transform(news))
  }

  public async showNewsByCategoryId(ctx: HttpContext) {
    const categoryId = await ctx.request.param('id')
    const news = await this.newsService.findNewsByCategoryId(categoryId)

    return ctx.serialize(NewsTransformer.transform(news))
  }

  public async showNewsBySearch(ctx: HttpContext) {
    const query = await ctx.request.input('q')
    const news = await this.newsService.findNewsBySearch(query)

    return ctx.serialize(NewsTransformer.transform(news))
  }

  public async editNews(ctx: HttpContext) {
    const id = await ctx.request.param('id')
    const payload = await ctx.request.validateUsing(updateNewsValidator)
    const updatedNews = await this.newsService.updateNews(id, payload)

    return ctx.serialize(NewsTransformer.transform(updatedNews))
  }

  public async destroyNews(ctx: HttpContext) {
    const id = await ctx.request.param('id')
    await this.newsService.deleteNews(id)

    return ctx.serialize({
      message: 'news wasa deleted',
    })
  }
}
