import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'teachers'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('gender')
      table.string('TTL')
      table.string('phone').nullable()
      table.string('secondary_email').nullable()
      table.string('academic_title').nullable()
      table.string('academic_handles').nullable()
      table.string('address').nullable()

      table.uuid('user_id').references('id').inTable('users').onDelete('SET NULL')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
