import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const payload = {
      email: 'master@mtsn2kotakediri.sch.id',
      password: 'u2q6c1Cc3cj6InwXEJHZxEZsX2xabGU0',
      role: 'super_user',
      username: 'Master',
    }
    await User.create(payload)
  }
}
