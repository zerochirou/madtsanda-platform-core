import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'students'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('nis').unique()
      table.string('nisn').unique()
      table.string('grade')
      table.string('class')
      table.enum('status', ['active', 'graduate', 'DO'])
      table.string('profile_url').nullable()
      table.string('profile_key').nullable()
      table.enum('gender', ['male', 'female'])
      table.string('TTL').nullable()
      table.string('phone').nullable()
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
