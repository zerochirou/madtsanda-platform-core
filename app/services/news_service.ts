import News from '#models/news'
import { inject } from '@adonisjs/core'
import { FileStorageService } from './file_storage_service.ts'
import { Infer } from '@vinejs/vine/types'
import { createNewsValidator, updateNewsValidator } from '#validators/news'
import { ModelPaginatorContract } from '@adonisjs/lucid/types/model'

interface NewsServiceContract {
  findAllNews(): Promise<News[]>
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

  public async findNewsByCategoryId(categoryId: string): Promise<News[]> {
    return await News.query().where('category_id', categoryId)
  }

  public async findNewsById(id: string): Promise<News> {
    return await News.query().where('id', id).preload('newsCategory').preload('user').firstOrFail()
  }

  public async findAllNewsPaginate(
    page: number,
    perPage: number = 10
  ): Promise<ModelPaginatorContract<News>> {
    const news = await News.query().preload('newsCategory').preload('user').paginate(page, perPage)
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
    const storedImageUrl = await this.fileStorageService.storeAvatar(data.image)
    const news = await News.create({
      userId: data.userId,
      categoryId: data.categoryId,
      content: data.content,
      title: data.title,
      pin: data.pin,
      imageUrl: storedImageUrl,
    })

    return news
  }

  public async updateNews(id: string, data: Infer<typeof updateNewsValidator>): Promise<News> {
    const news = await News.findOrFail(id)

    const { image, ...updateData } = data

    let newImageUrl: string | undefined

    if (image) {
      newImageUrl = await this.fileStorageService.storeAvatar(image)
    }

    news.merge({
      ...updateData,
      ...(newImageUrl ? { imageUrl: newImageUrl } : {}),
    })

    await news.save()
    return news
  }

  public async deleteNews(id: string): Promise<void> {
    const news = await News.findOrFail(id)

    await news.delete()
  }
}
