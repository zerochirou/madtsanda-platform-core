import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'
import { apiThrottle } from './limiter.ts'

router
  .get('/', () => {
    return { message: 'Welcome to the Madtsanda API', developer: 'https://zense.site' }
  })
  .use(apiThrottle)

router
  .group(() => {
    // health Check Endpoints
    router
      .group(() => {
        router.get('live', [controllers.HealthChecks, 'live'])
        router.get('ready', [controllers.HealthChecks, 'ready'])
      })
      .prefix('health')

    // user
    router
      .group(() => {
        router.get('/', [controllers.Users, 'showAllUser']).use(middleware.auth())
        router.post('/', [controllers.Users, 'submitUser']).use(middleware.auth())
        router.patch('/', [controllers.Users, 'updateUser']).use(middleware.auth())
        router.delete('/', [controllers.Users, 'destroyUser']).use(middleware.auth())
      })
      .prefix('user')

    // auth
    router
      .group(() => {
        router.post('/login', [controllers.Auth, 'login'])
        router.delete('/logout', [controllers.Auth, 'logout']).use(middleware.auth())
        router.get('/me', [controllers.Auth, 'me']).use(middleware.auth())
      })
      .prefix('auth')

    // students
    router
      .group(() => {
        router.get('/', [controllers.Students, 'showAllStudent']).use(middleware.auth())
        router.get('/token', [controllers.Students, 'showStudentWithToken']).use(middleware.auth())
        router
          .get('/:id', [controllers.Students, 'showStudentByID'])
          .where('id', router.matchers.uuid())
          .use(middleware.auth())
        router
          .get('/student/:id', [controllers.Students, 'showStudentByUserID'])
          .where('id', router.matchers.uuid())
          .use(middleware.auth())
        router
          .group(() => {
            router.put('/me', [controllers.Students, 'editStudent'])
            router.delete('/me', [controllers.Students, 'destroyStudent'])
            router.post('/', [controllers.Students, 'submitStudent'])
            router.put('/:id', [controllers.Students, 'editStudentByID'])
            router.delete('/:id', [controllers.Students, 'destroyStudentByID'])
          })
          .use(middleware.auth())
      })
      .prefix('student')

    // teacher
    router
      .group(() => {
        router.get('/', [controllers.Teachers, 'showAllTeacher']).use(middleware.auth())
        router
          .get('/:id', [controllers.Teachers, 'showTeacherByID'])
          .where('id', router.matchers.uuid())
          .use(middleware.auth())
        router
          .get('/user/:id', [controllers.Teachers, 'showTeacherByUserID'])
          .where('id', router.matchers.uuid())
          .use(middleware.auth())
        router.get('/token', [controllers.Teachers, 'showTeacherWithToken']).use(middleware.auth())
        router
          .group(() => {
            router.post('/', [controllers.Teachers, 'submitTeacher'])
            router.put('/me', [controllers.Teachers, 'editTeacher'])
            router.delete('/me', [controllers.Teachers, 'destroyTeacher'])
          })
          .use(middleware.auth())
        router.put('/:id', [controllers.Teachers, 'editTeacherByID']).use(middleware.auth())
        router.delete('/:id', [controllers.Teachers, 'destroyTeacherByID']).use(middleware.auth())
      })
      .prefix('teacher')

    // news
    router
      .group(() => {
        router
          .group(() => {
            router.get('/', [controllers.NewsCategories, 'showAllNewsCategory'])
            router.get('/:id', [controllers.NewsCategories, 'showNewsCategoryById'])
            router
              .post('/', [controllers.NewsCategories, 'submitNewsCategory'])
              .use(middleware.auth())
            router
              .put('/:id', [controllers.NewsCategories, 'editNewsCategory'])
              .use(middleware.auth())
            router
              .delete('/:id', [controllers.NewsCategories, 'destroyNewsCategory'])
              .use(middleware.auth())
          })
          .prefix('/category')

        router.post('/', [controllers.News, 'submitNews']).use(middleware.auth())
        router.get('/limit', [controllers.News, 'showNewsWithLimit'])
        router
          .put('/:id', [controllers.News, 'editNews'])
          .where('id', router.matchers.uuid())
          .use(middleware.auth())
        router
          .delete('/:id', [controllers.News, 'destroyNews'])
          .where('id', router.matchers.uuid())
          .use(middleware.auth())
        router.get('/', [controllers.News, 'showAllNews'])
        router.get('/paginate', [controllers.News, 'showAllNewsPaginate'])
        router.get('/:id', [controllers.News, 'showNewsById']).where('id', router.matchers.uuid())
        router.get('/search', [controllers.News, 'showNewsBySearch'])
        router
          .get('/:id/category', [controllers.News, 'showNewsByCategoryId'])
          .where('id', router.matchers.uuid())
      })
      .prefix('news')

    // research
    router
      .group(() => {
        router
          .group(() => {
            router.get('/', [controllers.ResearchTags, 'showAllResearchTags'])
            router
              .get('/:id', [controllers.ResearchTags, 'showResearchTagById'])
              .where('id', router.matchers.uuid())
            router.post('/', [controllers.ResearchTags, 'submitResearchTag']).use(middleware.auth())
            router
              .put('/:id', [controllers.ResearchTags, 'editResearchTag'])
              .where('id', router.matchers.uuid())
              .use(middleware.auth())
            router
              .delete('/:id', [controllers.ResearchTags, 'destroyResearchTag'])
              .where('id', router.matchers.uuid())
              .use(middleware.auth())
          })
          .prefix('/tag')
        router.get('/', [controllers.Research, 'showAllResearch'])
        router.get('/paginate', [controllers.Research, 'showAllResearchByPaginate'])
        router
          .get('/:id', [controllers.Research, 'showResearchById'])
          .where('id', router.matchers.uuid())
        router.get('/search', [controllers.Research, 'showResearchBySearch'])
        router.post('/', [controllers.Research, 'submitResearch']).use(middleware.auth())
        router
          .put('/:id', [controllers.Research, 'editResearch'])
          .where('id', router.matchers.uuid())
          .use(middleware.auth())
        router
          .get('/user/:id', [controllers.Research, 'showResearchByUserId'])
          .where('id', router.matchers.uuid())
        router
          .delete('/:id', [controllers.Research, 'destroyResearch'])
          .where('id', router.matchers.uuid())
          .use(middleware.auth())
      })
      .prefix('/research')
  })
  .prefix('/api/v1')
  .use(apiThrottle)
