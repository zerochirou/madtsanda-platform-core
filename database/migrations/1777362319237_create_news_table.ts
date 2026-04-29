import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'news'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('title')
      table.string('content')
      table.string('pin')
      table.string('image_url')
      table.uuid('user_id').references('id').inTable('users').onDelete('SET NULL')
      table.index(['title', 'content'], 'search_index', 'FULLTEXT')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
