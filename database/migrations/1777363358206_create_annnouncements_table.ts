import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'annnouncements'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()

      table.string('title')
      table.string('content')
      table.string('document_url')
      table.enum('status', ['high', 'medium', 'low'])
      table.string('theme')

      table.index(['title', 'content'], 'search_index', 'FULLTEXT')

      table.uuid('user_id').references('id').inTable('users').onDelete('SET NULL')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
