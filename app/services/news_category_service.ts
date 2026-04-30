import NewsCategory from '#models/news_category'

interface NewsCategoryServiceContract {
  findAllNewsCategory(): Promise<NewsCategory[]>
  findNewsCategoryById(id: string): Promise<NewsCategory>
  createNewsCategory(data: Partial<NewsCategory>): Promise<NewsCategory>
  updateNewsCategory(id: string, data: Partial<NewsCategory>): Promise<NewsCategory>
  deleteNewsCategory(id: string): Promise<void>
}

export class NewsCategoryService implements NewsCategoryServiceContract {
  public async findAllNewsCategory(): Promise<NewsCategory[]> {
    return await NewsCategory.all()
  }

  public async findNewsCategoryById(id: string): Promise<NewsCategory> {
    return await NewsCategory.findOrFail(id)
  }

  public async createNewsCategory(data: Partial<NewsCategory>): Promise<NewsCategory> {
    const newsCategory = await NewsCategory.create(data)

    return newsCategory
  }

  public async updateNewsCategory(id: string, data: Partial<NewsCategory>): Promise<NewsCategory> {
    const newsCategory = await NewsCategory.findOrFail(id)
    newsCategory.merge(data)
    await newsCategory.save()

    return newsCategory
  }

  public async deleteNewsCategory(id: string): Promise<void> {
    const newsCategory = await NewsCategory.findOrFail(id)

    await newsCategory.delete()
  }
}
