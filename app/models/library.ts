import { LibrarySchema } from '#database/schema'
import { beforeCreate } from '@adonisjs/lucid/orm'
import { randomUUID } from 'node:crypto'

export default class Library extends LibrarySchema {
  @beforeCreate()
  public static assignUuid(library: Library) {
    library.id = randomUUID()
  }
}
