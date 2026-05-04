import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router
  .group(() => {
    router
      .group(() => {
        router.get('live', [controllers.HealthChecks, 'live'])
        router.get('ready', [controllers.HealthChecks, 'ready'])
      })
      .prefix('health')

    router
      .group(() => {
        router.get('/', [controllers.Users, 'showAllUser'])
        router.post('/', [controllers.Users, 'submitUser'])
        router.patch('/', [controllers.Users, 'updateUser'])
        router.delete('/', [controllers.Users, 'destroyUser'])
      })
      .prefix('user')

    router
      .group(() => {
        router.post('/login', [controllers.Auth, 'login'])
        router.delete('/logout', [controllers.Auth, 'logout']).use(middleware.auth())
      })
      .prefix('auth')

    router
      .group(() => {
        router.get('/', [controllers.Students, 'showAllStudent'])
        router
          .get('/:id', [controllers.Students, 'showStudentByID'])
          .where('id', router.matchers.uuid())
        router
          .get('/user/:id', [controllers.Students, 'showStudentByUserID'])
          .where('id', router.matchers.uuid())

        router
          .group(() => {
            router.put('/me', [controllers.Students, 'editStudent'])
            router.delete('/me', [controllers.Students, 'destroyStudent'])
          })
          .use(middleware.auth())

        router
          .group(() => {
            router.post('/', [controllers.Students, 'submitStudent'])
            router.put('/:id', [controllers.Students, 'editStudentByID'])
            router.delete('/:id', [controllers.Students, 'destroyStudentByID'])
          })
          .use(middleware.auth())
      })
      .prefix('student')

    router
      .group(() => {
        router.get('/', [controllers.Teachers, 'showAllTeacher'])
        router.get('/:id', [controllers.Teachers, 'showTeacherByID'])
        router.get('/user/:id', [controllers.Teachers, 'showTeacherByUserID'])
        router
          .group(() => {
            router.post('/', [controllers.Teachers, 'submitTeacher'])
            router.put('/me', [controllers.Teachers, 'editTeacher'])
            router.delete('/me', [controllers.Teachers, 'destroyTeacher'])
          })
          .use(middleware.auth())
        router.put('/:id', [controllers.Teachers, 'editTeacherByID'])
        router.delete('/:id', [controllers.Teachers, 'destroyTeacherByID'])
      })
      .prefix('teacher')

    router
      .group(() => {
        router
          .group(() => {
            router.get('/', [controllers.NewsCategories, 'showAllNewsCategory'])
            router.get('/:id', [controllers.NewsCategories, 'showNewsCategoryById'])
            router.post('/', [controllers.NewsCategories, 'submitNewsCategory'])
            router.put('/:id', [controllers.NewsCategories, 'editNewsCategory'])
            router.delete('/:id', [controllers.NewsCategories, 'destroyNewsCategory'])
          })
          .prefix('/category')

        router.post('/', [controllers.News, 'submitNews'])
        router.get('/limit', [controllers.News, 'showNewsWithLimit'])
        router.put('/:id', [controllers.News, 'editNews']).where('id', router.matchers.uuid())
        router.delete('/:id', [controllers.News, 'destroyNews']).where('id', router.matchers.uuid())
        router.get('/', [controllers.News, 'showAllNews'])
        router.get('/paginate', [controllers.News, 'showAllNewsPaginate'])
        router.get('/:id', [controllers.News, 'showNewsById']).where('id', router.matchers.uuid())
        router.get('/search', [controllers.News, 'showNewsBySearch'])
        router
          .get('/:id/category', [controllers.News, 'showNewsByCategoryId'])
          .where('id', router.matchers.uuid())
      })
      .prefix('news')

    router
      .group(() => {
        router
          .group(() => {
            router.get('/', [controllers.ResearchTags, 'showAllResearchTags'])
            router
              .get('/:id', [controllers.ResearchTags, 'showResearchTagById'])
              .where('id', router.matchers.uuid())
            router.post('/', [controllers.ResearchTags, 'submitResearchTag'])
            router
              .put('/:id', [controllers.ResearchTags, 'editResearchTag'])
              .where('id', router.matchers.uuid())
            router
              .delete('/:id', [controllers.ResearchTags, 'destroyResearchTag'])
              .where('id', router.matchers.uuid())
          })
          .prefix('/tag')
        router.get('/', [controllers.Research, 'showAllResearch'])
        router
          .get('/:id', [controllers.Research, 'showResearchById'])
          .where('id', router.matchers.uuid())
        router.get('/search', [controllers.Research, 'showResearchBySearch'])
        router.post('/', [controllers.Research, 'submitResearch'])
        router
          .put('/:id', [controllers.Research, 'editResearch'])
          .where('id', router.matchers.uuid())
        router
          .get('/user/:id', [controllers.Research, 'showResearchByUserId'])
          .where('id', router.matchers.uuid())
        router
          .delete('/:id', [controllers.Research, 'destroyResearch'])
          .where('id', router.matchers.uuid())
      })
      .prefix('/research')
  })
  .prefix('/api/v1')
