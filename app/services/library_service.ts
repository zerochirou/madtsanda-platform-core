import Library from '#models/library'

interface LibraryServiceContract {
  findAllLibrary(): Promise<Library[]>
  findLibraryById(id: string): Promise<Library>
  createLibrary(data: Partial<Library>): Promise<Library>
  updateLibrary(id: string, data: Partial<Library>): Promise<Library>
  deleteLibrary(id: string): Promise<void>
}

export class LibraryService implements LibraryServiceContract {
  public async findAllLibrary(): Promise<Library[]> {
    return await Library.query().orderBy('createdAt', 'desc')
  }

  public async findLibraryById(id: string): Promise<Library> {
    return await Library.findOrFail(id)
  }

  public async createLibrary(data: Partial<Library>): Promise<Library> {
    const library = await Library.create(data)

    return library
  }

  public async updateLibrary(id: string, data: Partial<Library>): Promise<Library> {
    const library = await Library.findOrFail(id)
    library.merge(data)
    await library.save()

    return library
  }

  public async deleteLibrary(id: string): Promise<void> {
    const library = await Library.findOrFail(id)

    await library.delete()
  }
}
