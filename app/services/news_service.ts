import News from '#models/news'
import { inject } from '@adonisjs/core'
import { FileStorageService } from './file_storage_service.ts'
import { Infer } from '@vinejs/vine/types'
import { createNewsValidator, updateNewsValidator } from '#validators/news'
import { ModelPaginatorContract } from '@adonisjs/lucid/types/model'

interface NewsServiceContract {
  findAllNews(): Promise<News[]>
  findNewsWithLimit(limit: number): Promise<News[]>
  findAllNewsPaginate(page: number, perPage: number): Promise<ModelPaginatorContract<News>>
  findNewsByCategoryId(categoryId: string): Promise<News[]>
  findNewsById(id: string): Promise<News>
  findNewsBySearch(query: string): Promise<News[]>
  createNews(data: Partial<News>): Promise<News>
  updateNews(id: string, data: Partial<News>): Promise<News>
  deleteNews(id: string): Promise<void>
}

@inject()
export class NewsService implements NewsServiceContract {
  constructor(protected fileStorageService: FileStorageService) {}

  public async findAllNews(): Promise<News[]> {
    return await News.query().preload('newsCategory').preload('user')
  }

  public async findNewsWithLimit(limit: number): Promise<News[]> {
    return await News.query()
      .preload('newsCategory')
      .preload('user')
      .limit(limit)
      .orderBy('pin', 'desc')
      .orderBy('createdAt', 'desc')
  }

  public async findNewsByCategoryId(categoryId: string): Promise<News[]> {
    return await News.query()
      .where('category_id', categoryId)
      .preload('newsCategory')
      .preload('user')
  }

  public async findNewsById(id: string): Promise<News> {
    return await News.query().where('id', id).preload('newsCategory').preload('user').firstOrFail()
  }

  public async findAllNewsPaginate(
    page: number,
    perPage: number = 10
  ): Promise<ModelPaginatorContract<News>> {
    const news = await News.query()
      .preload('newsCategory')
      .preload('user')
      .orderBy('pin', 'desc')
      .orderBy('createdAt', 'desc')
      .paginate(page, perPage)
    return news
  }

  public async findNewsBySearch(query: string): Promise<News[]> {
    const news = await News.query()
      .select('*')
      .select(
        News.query().client.raw(
          'MATCH(title, content) AGAINST(? IN NATURAL LANGUAGE MODE) AS relevance',
          [query]
        )
      )
      .whereRaw('MATCH(title, content) AGAINST(? IN NATURAL LANGUAGE MODE)', [query])
      .orderBy('relevance', 'desc')
    return news
  }

  public async createNews(data: Infer<typeof createNewsValidator>): Promise<News> {
    const { image, ...dataRest } = data
    const [imageKey, imageUrl] = await this.fileStorageService.bannerImageStore(image)
    const news = await News.create({
      imageKey: imageKey,
      imageUrl: imageUrl,
      ...dataRest,
    })

    return news
  }

  public async updateNews(id: string, data: Infer<typeof updateNewsValidator>): Promise<News> {
    const news = await News.findOrFail(id)
    const { image, ...dataRest } = data
    let newImageKey: string | undefined
    let newImageUrl: string | undefined

    if (image) {
      ;[newImageKey, newImageUrl] = await this.fileStorageService.bannerImageStore(image)
      await this.fileStorageService.bannerImageDestroy(news.imageKey)
    }

    news.merge({
      ...dataRest,
      ...(image ? { imageKey: newImageKey, imageUrl: newImageUrl } : {}),
    })

    await news.save()
    return news
  }

  public async deleteNews(id: string): Promise<void> {
    const news = await News.findOrFail(id)
    await this.fileStorageService.bannerImageDestroy(news.imageKey)

    await news.delete()
  }
}
