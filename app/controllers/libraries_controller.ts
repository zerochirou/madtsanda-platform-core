import { adminAccessControll } from '#abilities/main'
import { LibraryService } from '#services/library_service'
import LibraryTransformer from '#transformers/library_transformer'
import { createLibraryValidator, updateLibraryValidator } from '#validators/library'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class LibrariesController {
  constructor(protected libraryService: LibraryService) {}

  private async adminAccessControll(ctx: HttpContext) {
    if (await ctx.bouncer.denies(adminAccessControll)) {
      ctx.response.forbidden('You cannot edit this')
      return false
    }

    return true
  }

  public async showAllLibrary(ctx: HttpContext) {
    const libraries = await this.libraryService.findAllLibrary()

    return ctx.serialize(LibraryTransformer.transform(libraries))
  }

  public async submitLibrary(ctx: HttpContext) {
    if (!(await this.adminAccessControll(ctx))) return

    const payload = await ctx.request.validateUsing(createLibraryValidator)
    const library = await this.libraryService.createLibrary(payload)

    return ctx.serialize(LibraryTransformer.transform(library))
  }

  public async showLibraryById(ctx: HttpContext) {
    const id = await ctx.request.param('id')
    const library = await this.libraryService.findLibraryById(id)

    return ctx.serialize(LibraryTransformer.transform(library))
  }

  public async editLibrary(ctx: HttpContext) {
    if (!(await this.adminAccessControll(ctx))) return

    const id = await ctx.request.param('id')
    const payload = await ctx.request.validateUsing(updateLibraryValidator)
    const library = await this.libraryService.updateLibrary(id, payload)

    return ctx.serialize(LibraryTransformer.transform(library))
  }

  public async destroyLibrary(ctx: HttpContext) {
    if (!(await this.adminAccessControll(ctx))) return

    const id = await ctx.request.param('id')
    await this.libraryService.deleteLibrary(id)

    return ctx.serialize({
      message: 'library was deleted',
    })
  }
}
