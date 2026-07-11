import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'research'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('title').unique()
      table.text('abstrack')
      table.string('document_url').notNullable()
      table.string('document_key').notNullable()
      table.string('published_date')
      table.enum('status', ['pending', 'has_done'])
      table.uuid('user_id').references('id').inTable('users').onDelete('SET NULL')
      table.uuid('research_tag_id').references('id').inTable('research_tags').onDelete('SET NULL')
      table.index(['title', 'abstrack'], 'search_index', 'FULLTEXT')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
