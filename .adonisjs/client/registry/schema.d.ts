/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'health_checks.live': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/health/live'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/health_checks_controller').default['live']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/health_checks_controller').default['live']>>>
    }
  }
  'health_checks.ready': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/health/ready'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/health_checks_controller').default['ready']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/health_checks_controller').default['ready']>>>
    }
  }
  'users.show_all_user': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/user'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['showAllUser']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['showAllUser']>>>
    }
  }
  'users.submit_user': {
    methods: ["POST"]
    pattern: '/api/v1/user'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').createUserValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').createUserValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['submitUser']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['submitUser']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'users.update_user': {
    methods: ["PATCH"]
    pattern: '/api/v1/user'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').updateUserValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').updateUserValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['updateUser']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['updateUser']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'users.destroy_user': {
    methods: ["DELETE"]
    pattern: '/api/v1/user'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['destroyUser']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['destroyUser']>>>
    }
  }
  'auth.login': {
    methods: ["POST"]
    pattern: '/api/v1/auth/login'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/auth').createLoginValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/auth').createLoginValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['login']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['login']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'auth.logout': {
    methods: ["DELETE"]
    pattern: '/api/v1/auth/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['logout']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['logout']>>>
    }
  }
  'auth.me': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/auth/me'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['me']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['me']>>>
    }
  }
  'students.show_all_student': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/student'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/students_controller').default['showAllStudent']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/students_controller').default['showAllStudent']>>>
    }
  }
  'students.show_student_with_token': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/student/token'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/students_controller').default['showStudentWithToken']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/students_controller').default['showStudentWithToken']>>>
    }
  }
  'students.show_student_by_id': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/student/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/students_controller').default['showStudentByID']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/students_controller').default['showStudentByID']>>>
    }
  }
  'students.show_student_by_user_id': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/student/user/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/students_controller').default['showStudentByUserID']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/students_controller').default['showStudentByUserID']>>>
    }
  }
  'students.edit_student': {
    methods: ["PUT"]
    pattern: '/api/v1/student/me'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/student').updateStudentValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/student').updateStudentValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/students_controller').default['editStudent']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/students_controller').default['editStudent']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'students.destroy_student': {
    methods: ["DELETE"]
    pattern: '/api/v1/student/me'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/students_controller').default['destroyStudent']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/students_controller').default['destroyStudent']>>>
    }
  }
  'students.submit_student': {
    methods: ["POST"]
    pattern: '/api/v1/student'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/student').createStudentValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/student').createStudentValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/students_controller').default['submitStudent']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/students_controller').default['submitStudent']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'students.edit_student_by_id': {
    methods: ["PUT"]
    pattern: '/api/v1/student/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/student').updateStudentValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/student').updateStudentValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/students_controller').default['editStudentByID']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/students_controller').default['editStudentByID']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'students.destroy_student_by_id': {
    methods: ["DELETE"]
    pattern: '/api/v1/student/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/students_controller').default['destroyStudentByID']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/students_controller').default['destroyStudentByID']>>>
    }
  }
  'teachers.show_all_teacher': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/teacher'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/teachers_controller').default['showAllTeacher']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/teachers_controller').default['showAllTeacher']>>>
    }
  }
  'teachers.show_teacher_by_id': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/teacher/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/teachers_controller').default['showTeacherByID']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/teachers_controller').default['showTeacherByID']>>>
    }
  }
  'teachers.show_teacher_by_user_id': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/teacher/user/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/teachers_controller').default['showTeacherByUserID']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/teachers_controller').default['showTeacherByUserID']>>>
    }
  }
  'teachers.show_teacher_with_token': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/teacher/token'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/teachers_controller').default['showTeacherWithToken']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/teachers_controller').default['showTeacherWithToken']>>>
    }
  }
  'teachers.submit_teacher': {
    methods: ["POST"]
    pattern: '/api/v1/teacher'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/teacher').createTeacherValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/teacher').createTeacherValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/teachers_controller').default['submitTeacher']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/teachers_controller').default['submitTeacher']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'teachers.edit_teacher': {
    methods: ["PUT"]
    pattern: '/api/v1/teacher/me'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/teacher').updateTeacherValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/teacher').updateTeacherValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/teachers_controller').default['editTeacher']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/teachers_controller').default['editTeacher']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'teachers.destroy_teacher': {
    methods: ["DELETE"]
    pattern: '/api/v1/teacher/me'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/teachers_controller').default['destroyTeacher']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/teachers_controller').default['destroyTeacher']>>>
    }
  }
  'teachers.edit_teacher_by_id': {
    methods: ["PUT"]
    pattern: '/api/v1/teacher/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/teacher').updateTeacherValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/teacher').updateTeacherValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/teachers_controller').default['editTeacherByID']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/teachers_controller').default['editTeacherByID']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'teachers.destroy_teacher_by_id': {
    methods: ["DELETE"]
    pattern: '/api/v1/teacher/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/teachers_controller').default['destroyTeacherByID']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/teachers_controller').default['destroyTeacherByID']>>>
    }
  }
  'news_categories.show_all_news_category': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/news/category'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/news_categories_controller').default['showAllNewsCategory']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/news_categories_controller').default['showAllNewsCategory']>>>
    }
  }
  'news_categories.show_news_category_by_id': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/news/category/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/news_categories_controller').default['showNewsCategoryById']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/news_categories_controller').default['showNewsCategoryById']>>>
    }
  }
  'news_categories.submit_news_category': {
    methods: ["POST"]
    pattern: '/api/v1/news/category'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/news_category').createNewsCategoryValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/news_category').createNewsCategoryValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/news_categories_controller').default['submitNewsCategory']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/news_categories_controller').default['submitNewsCategory']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'news_categories.edit_news_category': {
    methods: ["PUT"]
    pattern: '/api/v1/news/category/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/news_category').updateNewsCategoryValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/news_category').updateNewsCategoryValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/news_categories_controller').default['editNewsCategory']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/news_categories_controller').default['editNewsCategory']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'news_categories.destroy_news_category': {
    methods: ["DELETE"]
    pattern: '/api/v1/news/category/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/news_categories_controller').default['destroyNewsCategory']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/news_categories_controller').default['destroyNewsCategory']>>>
    }
  }
  'news.submit_news': {
    methods: ["POST"]
    pattern: '/api/v1/news'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/news').createNewsValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/news').createNewsValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/news_controller').default['submitNews']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/news_controller').default['submitNews']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'news.show_news_with_limit': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/news/limit'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/news_controller').default['showNewsWithLimit']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/news_controller').default['showNewsWithLimit']>>>
    }
  }
  'news.edit_news': {
    methods: ["PUT"]
    pattern: '/api/v1/news/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/news').updateNewsValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/news').updateNewsValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/news_controller').default['editNews']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/news_controller').default['editNews']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'news.destroy_news': {
    methods: ["DELETE"]
    pattern: '/api/v1/news/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/news_controller').default['destroyNews']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/news_controller').default['destroyNews']>>>
    }
  }
  'news.show_all_news': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/news'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/news_controller').default['showAllNews']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/news_controller').default['showAllNews']>>>
    }
  }
  'news.show_all_news_paginate': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/news/paginate'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/news_controller').default['showAllNewsPaginate']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/news_controller').default['showAllNewsPaginate']>>>
    }
  }
  'news.show_news_by_id': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/news/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/news_controller').default['showNewsById']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/news_controller').default['showNewsById']>>>
    }
  }
  'news.show_news_by_search': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/news/search'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/news_controller').default['showNewsBySearch']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/news_controller').default['showNewsBySearch']>>>
    }
  }
  'news.show_news_by_category_id': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/news/:id/category'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/news_controller').default['showNewsByCategoryId']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/news_controller').default['showNewsByCategoryId']>>>
    }
  }
  'research_tags.show_all_research_tags': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/research/tag'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/research_tags_controller').default['showAllResearchTags']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/research_tags_controller').default['showAllResearchTags']>>>
    }
  }
  'research_tags.show_research_tag_by_id': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/research/tag/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/research_tags_controller').default['showResearchTagById']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/research_tags_controller').default['showResearchTagById']>>>
    }
  }
  'research_tags.submit_research_tag': {
    methods: ["POST"]
    pattern: '/api/v1/research/tag'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/research_tag').createResearchTagValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/research_tag').createResearchTagValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/research_tags_controller').default['submitResearchTag']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/research_tags_controller').default['submitResearchTag']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'research_tags.edit_research_tag': {
    methods: ["PUT"]
    pattern: '/api/v1/research/tag/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/research_tag').updateResearchTagValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/research_tag').updateResearchTagValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/research_tags_controller').default['editResearchTag']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/research_tags_controller').default['editResearchTag']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'research_tags.destroy_research_tag': {
    methods: ["DELETE"]
    pattern: '/api/v1/research/tag/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/research_tags_controller').default['destroyResearchTag']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/research_tags_controller').default['destroyResearchTag']>>>
    }
  }
  'research.show_all_research': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/research'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/research_controller').default['showAllResearch']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/research_controller').default['showAllResearch']>>>
    }
  }
  'research.show_research_by_id': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/research/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/research_controller').default['showResearchById']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/research_controller').default['showResearchById']>>>
    }
  }
  'research.show_research_by_search': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/research/search'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/research_controller').default['showResearchBySearch']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/research_controller').default['showResearchBySearch']>>>
    }
  }
  'research.submit_research': {
    methods: ["POST"]
    pattern: '/api/v1/research'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/research').createResearchValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/research').createResearchValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/research_controller').default['submitResearch']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/research_controller').default['submitResearch']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'research.edit_research': {
    methods: ["PUT"]
    pattern: '/api/v1/research/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/research').updateResearchValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/research').updateResearchValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/research_controller').default['editResearch']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/research_controller').default['editResearch']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'research.show_research_by_user_id': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/research/user/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/research_controller').default['showResearchByUserId']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/research_controller').default['showResearchByUserId']>>>
    }
  }
  'research.destroy_research': {
    methods: ["DELETE"]
    pattern: '/api/v1/research/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/research_controller').default['destroyResearch']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/research_controller').default['destroyResearch']>>>
    }
  }
}
