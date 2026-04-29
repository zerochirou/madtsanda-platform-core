import factory from '@adonisjs/lucid/factories'
import User from '#models/user'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    const PASSWORD_TEMP = '12345678'
    enum NewsStatus {
      SUPER_USER = 'super_user',
      STUDENT = 'student',
      TEACHER = 'teacher',
      ADMIN = 'admin',
    }

    return {
      username: faker.internet.displayName(),
      email: faker.internet.email(),
      password: PASSWORD_TEMP,
      role: faker.helpers.arrayElement(Object.values(NewsStatus)),
    }
  })
  .build()
