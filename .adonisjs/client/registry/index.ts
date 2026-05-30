/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'health_checks.live': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/health/live',
    tokens: [{"old":"/api/v1/health/live","type":0,"val":"api","end":""},{"old":"/api/v1/health/live","type":0,"val":"v1","end":""},{"old":"/api/v1/health/live","type":0,"val":"health","end":""},{"old":"/api/v1/health/live","type":0,"val":"live","end":""}],
    types: placeholder as Registry['health_checks.live']['types'],
  },
  'health_checks.ready': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/health/ready',
    tokens: [{"old":"/api/v1/health/ready","type":0,"val":"api","end":""},{"old":"/api/v1/health/ready","type":0,"val":"v1","end":""},{"old":"/api/v1/health/ready","type":0,"val":"health","end":""},{"old":"/api/v1/health/ready","type":0,"val":"ready","end":""}],
    types: placeholder as Registry['health_checks.ready']['types'],
  },
  'users.show_all_user': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/user',
    tokens: [{"old":"/api/v1/user","type":0,"val":"api","end":""},{"old":"/api/v1/user","type":0,"val":"v1","end":""},{"old":"/api/v1/user","type":0,"val":"user","end":""}],
    types: placeholder as Registry['users.show_all_user']['types'],
  },
  'users.submit_user': {
    methods: ["POST"],
    pattern: '/api/v1/user',
    tokens: [{"old":"/api/v1/user","type":0,"val":"api","end":""},{"old":"/api/v1/user","type":0,"val":"v1","end":""},{"old":"/api/v1/user","type":0,"val":"user","end":""}],
    types: placeholder as Registry['users.submit_user']['types'],
  },
  'users.update_user': {
    methods: ["PATCH"],
    pattern: '/api/v1/user',
    tokens: [{"old":"/api/v1/user","type":0,"val":"api","end":""},{"old":"/api/v1/user","type":0,"val":"v1","end":""},{"old":"/api/v1/user","type":0,"val":"user","end":""}],
    types: placeholder as Registry['users.update_user']['types'],
  },
  'users.destroy_user': {
    methods: ["DELETE"],
    pattern: '/api/v1/user',
    tokens: [{"old":"/api/v1/user","type":0,"val":"api","end":""},{"old":"/api/v1/user","type":0,"val":"v1","end":""},{"old":"/api/v1/user","type":0,"val":"user","end":""}],
    types: placeholder as Registry['users.destroy_user']['types'],
  },
  'auth.login': {
    methods: ["POST"],
    pattern: '/api/v1/auth/login',
    tokens: [{"old":"/api/v1/auth/login","type":0,"val":"api","end":""},{"old":"/api/v1/auth/login","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/login","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.login']['types'],
  },
  'auth.logout': {
    methods: ["DELETE"],
    pattern: '/api/v1/auth/logout',
    tokens: [{"old":"/api/v1/auth/logout","type":0,"val":"api","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['auth.logout']['types'],
  },
  'auth.me': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/auth/me',
    tokens: [{"old":"/api/v1/auth/me","type":0,"val":"api","end":""},{"old":"/api/v1/auth/me","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/me","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/me","type":0,"val":"me","end":""}],
    types: placeholder as Registry['auth.me']['types'],
  },
  'students.show_all_student': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/student',
    tokens: [{"old":"/api/v1/student","type":0,"val":"api","end":""},{"old":"/api/v1/student","type":0,"val":"v1","end":""},{"old":"/api/v1/student","type":0,"val":"student","end":""}],
    types: placeholder as Registry['students.show_all_student']['types'],
  },
  'students.show_student_with_token': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/student/token',
    tokens: [{"old":"/api/v1/student/token","type":0,"val":"api","end":""},{"old":"/api/v1/student/token","type":0,"val":"v1","end":""},{"old":"/api/v1/student/token","type":0,"val":"student","end":""},{"old":"/api/v1/student/token","type":0,"val":"token","end":""}],
    types: placeholder as Registry['students.show_student_with_token']['types'],
  },
  'students.show_student_by_id': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/student/:id',
    tokens: [{"old":"/api/v1/student/:id","type":0,"val":"api","end":""},{"old":"/api/v1/student/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/student/:id","type":0,"val":"student","end":""},{"old":"/api/v1/student/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['students.show_student_by_id']['types'],
  },
  'students.show_student_by_user_id': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/student/student/:id',
    tokens: [{"old":"/api/v1/student/student/:id","type":0,"val":"api","end":""},{"old":"/api/v1/student/student/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/student/student/:id","type":0,"val":"student","end":""},{"old":"/api/v1/student/student/:id","type":0,"val":"student","end":""},{"old":"/api/v1/student/student/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['students.show_student_by_user_id']['types'],
  },
  'students.edit_student': {
    methods: ["PUT"],
    pattern: '/api/v1/student/me',
    tokens: [{"old":"/api/v1/student/me","type":0,"val":"api","end":""},{"old":"/api/v1/student/me","type":0,"val":"v1","end":""},{"old":"/api/v1/student/me","type":0,"val":"student","end":""},{"old":"/api/v1/student/me","type":0,"val":"me","end":""}],
    types: placeholder as Registry['students.edit_student']['types'],
  },
  'students.destroy_student': {
    methods: ["DELETE"],
    pattern: '/api/v1/student/me',
    tokens: [{"old":"/api/v1/student/me","type":0,"val":"api","end":""},{"old":"/api/v1/student/me","type":0,"val":"v1","end":""},{"old":"/api/v1/student/me","type":0,"val":"student","end":""},{"old":"/api/v1/student/me","type":0,"val":"me","end":""}],
    types: placeholder as Registry['students.destroy_student']['types'],
  },
  'students.submit_student': {
    methods: ["POST"],
    pattern: '/api/v1/student',
    tokens: [{"old":"/api/v1/student","type":0,"val":"api","end":""},{"old":"/api/v1/student","type":0,"val":"v1","end":""},{"old":"/api/v1/student","type":0,"val":"student","end":""}],
    types: placeholder as Registry['students.submit_student']['types'],
  },
  'students.edit_student_by_id': {
    methods: ["PUT"],
    pattern: '/api/v1/student/:id',
    tokens: [{"old":"/api/v1/student/:id","type":0,"val":"api","end":""},{"old":"/api/v1/student/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/student/:id","type":0,"val":"student","end":""},{"old":"/api/v1/student/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['students.edit_student_by_id']['types'],
  },
  'students.destroy_student_by_id': {
    methods: ["DELETE"],
    pattern: '/api/v1/student/:id',
    tokens: [{"old":"/api/v1/student/:id","type":0,"val":"api","end":""},{"old":"/api/v1/student/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/student/:id","type":0,"val":"student","end":""},{"old":"/api/v1/student/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['students.destroy_student_by_id']['types'],
  },
  'teachers.show_all_teacher': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/teacher',
    tokens: [{"old":"/api/v1/teacher","type":0,"val":"api","end":""},{"old":"/api/v1/teacher","type":0,"val":"v1","end":""},{"old":"/api/v1/teacher","type":0,"val":"teacher","end":""}],
    types: placeholder as Registry['teachers.show_all_teacher']['types'],
  },
  'teachers.show_teacher_by_id': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/teacher/:id',
    tokens: [{"old":"/api/v1/teacher/:id","type":0,"val":"api","end":""},{"old":"/api/v1/teacher/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/teacher/:id","type":0,"val":"teacher","end":""},{"old":"/api/v1/teacher/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['teachers.show_teacher_by_id']['types'],
  },
  'teachers.show_teacher_by_user_id': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/teacher/user/:id',
    tokens: [{"old":"/api/v1/teacher/user/:id","type":0,"val":"api","end":""},{"old":"/api/v1/teacher/user/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/teacher/user/:id","type":0,"val":"teacher","end":""},{"old":"/api/v1/teacher/user/:id","type":0,"val":"user","end":""},{"old":"/api/v1/teacher/user/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['teachers.show_teacher_by_user_id']['types'],
  },
  'teachers.show_teacher_with_token': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/teacher/token',
    tokens: [{"old":"/api/v1/teacher/token","type":0,"val":"api","end":""},{"old":"/api/v1/teacher/token","type":0,"val":"v1","end":""},{"old":"/api/v1/teacher/token","type":0,"val":"teacher","end":""},{"old":"/api/v1/teacher/token","type":0,"val":"token","end":""}],
    types: placeholder as Registry['teachers.show_teacher_with_token']['types'],
  },
  'teachers.submit_teacher': {
    methods: ["POST"],
    pattern: '/api/v1/teacher',
    tokens: [{"old":"/api/v1/teacher","type":0,"val":"api","end":""},{"old":"/api/v1/teacher","type":0,"val":"v1","end":""},{"old":"/api/v1/teacher","type":0,"val":"teacher","end":""}],
    types: placeholder as Registry['teachers.submit_teacher']['types'],
  },
  'teachers.edit_teacher': {
    methods: ["PUT"],
    pattern: '/api/v1/teacher/me',
    tokens: [{"old":"/api/v1/teacher/me","type":0,"val":"api","end":""},{"old":"/api/v1/teacher/me","type":0,"val":"v1","end":""},{"old":"/api/v1/teacher/me","type":0,"val":"teacher","end":""},{"old":"/api/v1/teacher/me","type":0,"val":"me","end":""}],
    types: placeholder as Registry['teachers.edit_teacher']['types'],
  },
  'teachers.destroy_teacher': {
    methods: ["DELETE"],
    pattern: '/api/v1/teacher/me',
    tokens: [{"old":"/api/v1/teacher/me","type":0,"val":"api","end":""},{"old":"/api/v1/teacher/me","type":0,"val":"v1","end":""},{"old":"/api/v1/teacher/me","type":0,"val":"teacher","end":""},{"old":"/api/v1/teacher/me","type":0,"val":"me","end":""}],
    types: placeholder as Registry['teachers.destroy_teacher']['types'],
  },
  'teachers.edit_teacher_by_id': {
    methods: ["PUT"],
    pattern: '/api/v1/teacher/:id',
    tokens: [{"old":"/api/v1/teacher/:id","type":0,"val":"api","end":""},{"old":"/api/v1/teacher/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/teacher/:id","type":0,"val":"teacher","end":""},{"old":"/api/v1/teacher/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['teachers.edit_teacher_by_id']['types'],
  },
  'teachers.destroy_teacher_by_id': {
    methods: ["DELETE"],
    pattern: '/api/v1/teacher/:id',
    tokens: [{"old":"/api/v1/teacher/:id","type":0,"val":"api","end":""},{"old":"/api/v1/teacher/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/teacher/:id","type":0,"val":"teacher","end":""},{"old":"/api/v1/teacher/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['teachers.destroy_teacher_by_id']['types'],
  },
  'news_categories.show_all_news_category': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/news/category',
    tokens: [{"old":"/api/v1/news/category","type":0,"val":"api","end":""},{"old":"/api/v1/news/category","type":0,"val":"v1","end":""},{"old":"/api/v1/news/category","type":0,"val":"news","end":""},{"old":"/api/v1/news/category","type":0,"val":"category","end":""}],
    types: placeholder as Registry['news_categories.show_all_news_category']['types'],
  },
  'news_categories.show_news_category_by_id': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/news/category/:id',
    tokens: [{"old":"/api/v1/news/category/:id","type":0,"val":"api","end":""},{"old":"/api/v1/news/category/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/news/category/:id","type":0,"val":"news","end":""},{"old":"/api/v1/news/category/:id","type":0,"val":"category","end":""},{"old":"/api/v1/news/category/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['news_categories.show_news_category_by_id']['types'],
  },
  'news_categories.submit_news_category': {
    methods: ["POST"],
    pattern: '/api/v1/news/category',
    tokens: [{"old":"/api/v1/news/category","type":0,"val":"api","end":""},{"old":"/api/v1/news/category","type":0,"val":"v1","end":""},{"old":"/api/v1/news/category","type":0,"val":"news","end":""},{"old":"/api/v1/news/category","type":0,"val":"category","end":""}],
    types: placeholder as Registry['news_categories.submit_news_category']['types'],
  },
  'news_categories.edit_news_category': {
    methods: ["PUT"],
    pattern: '/api/v1/news/category/:id',
    tokens: [{"old":"/api/v1/news/category/:id","type":0,"val":"api","end":""},{"old":"/api/v1/news/category/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/news/category/:id","type":0,"val":"news","end":""},{"old":"/api/v1/news/category/:id","type":0,"val":"category","end":""},{"old":"/api/v1/news/category/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['news_categories.edit_news_category']['types'],
  },
  'news_categories.destroy_news_category': {
    methods: ["DELETE"],
    pattern: '/api/v1/news/category/:id',
    tokens: [{"old":"/api/v1/news/category/:id","type":0,"val":"api","end":""},{"old":"/api/v1/news/category/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/news/category/:id","type":0,"val":"news","end":""},{"old":"/api/v1/news/category/:id","type":0,"val":"category","end":""},{"old":"/api/v1/news/category/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['news_categories.destroy_news_category']['types'],
  },
  'news.submit_news': {
    methods: ["POST"],
    pattern: '/api/v1/news',
    tokens: [{"old":"/api/v1/news","type":0,"val":"api","end":""},{"old":"/api/v1/news","type":0,"val":"v1","end":""},{"old":"/api/v1/news","type":0,"val":"news","end":""}],
    types: placeholder as Registry['news.submit_news']['types'],
  },
  'news.show_news_with_limit': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/news/limit',
    tokens: [{"old":"/api/v1/news/limit","type":0,"val":"api","end":""},{"old":"/api/v1/news/limit","type":0,"val":"v1","end":""},{"old":"/api/v1/news/limit","type":0,"val":"news","end":""},{"old":"/api/v1/news/limit","type":0,"val":"limit","end":""}],
    types: placeholder as Registry['news.show_news_with_limit']['types'],
  },
  'news.edit_news': {
    methods: ["PUT"],
    pattern: '/api/v1/news/:id',
    tokens: [{"old":"/api/v1/news/:id","type":0,"val":"api","end":""},{"old":"/api/v1/news/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/news/:id","type":0,"val":"news","end":""},{"old":"/api/v1/news/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['news.edit_news']['types'],
  },
  'news.destroy_news': {
    methods: ["DELETE"],
    pattern: '/api/v1/news/:id',
    tokens: [{"old":"/api/v1/news/:id","type":0,"val":"api","end":""},{"old":"/api/v1/news/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/news/:id","type":0,"val":"news","end":""},{"old":"/api/v1/news/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['news.destroy_news']['types'],
  },
  'news.show_all_news': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/news',
    tokens: [{"old":"/api/v1/news","type":0,"val":"api","end":""},{"old":"/api/v1/news","type":0,"val":"v1","end":""},{"old":"/api/v1/news","type":0,"val":"news","end":""}],
    types: placeholder as Registry['news.show_all_news']['types'],
  },
  'news.show_all_news_paginate': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/news/paginate',
    tokens: [{"old":"/api/v1/news/paginate","type":0,"val":"api","end":""},{"old":"/api/v1/news/paginate","type":0,"val":"v1","end":""},{"old":"/api/v1/news/paginate","type":0,"val":"news","end":""},{"old":"/api/v1/news/paginate","type":0,"val":"paginate","end":""}],
    types: placeholder as Registry['news.show_all_news_paginate']['types'],
  },
  'news.show_news_by_id': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/news/:id',
    tokens: [{"old":"/api/v1/news/:id","type":0,"val":"api","end":""},{"old":"/api/v1/news/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/news/:id","type":0,"val":"news","end":""},{"old":"/api/v1/news/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['news.show_news_by_id']['types'],
  },
  'news.show_news_by_search': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/news/search',
    tokens: [{"old":"/api/v1/news/search","type":0,"val":"api","end":""},{"old":"/api/v1/news/search","type":0,"val":"v1","end":""},{"old":"/api/v1/news/search","type":0,"val":"news","end":""},{"old":"/api/v1/news/search","type":0,"val":"search","end":""}],
    types: placeholder as Registry['news.show_news_by_search']['types'],
  },
  'news.show_news_by_category_id': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/news/:id/category',
    tokens: [{"old":"/api/v1/news/:id/category","type":0,"val":"api","end":""},{"old":"/api/v1/news/:id/category","type":0,"val":"v1","end":""},{"old":"/api/v1/news/:id/category","type":0,"val":"news","end":""},{"old":"/api/v1/news/:id/category","type":1,"val":"id","end":""},{"old":"/api/v1/news/:id/category","type":0,"val":"category","end":""}],
    types: placeholder as Registry['news.show_news_by_category_id']['types'],
  },
  'research_tags.show_all_research_tags': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/research/tag',
    tokens: [{"old":"/api/v1/research/tag","type":0,"val":"api","end":""},{"old":"/api/v1/research/tag","type":0,"val":"v1","end":""},{"old":"/api/v1/research/tag","type":0,"val":"research","end":""},{"old":"/api/v1/research/tag","type":0,"val":"tag","end":""}],
    types: placeholder as Registry['research_tags.show_all_research_tags']['types'],
  },
  'research_tags.show_research_tag_by_id': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/research/tag/:id',
    tokens: [{"old":"/api/v1/research/tag/:id","type":0,"val":"api","end":""},{"old":"/api/v1/research/tag/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/research/tag/:id","type":0,"val":"research","end":""},{"old":"/api/v1/research/tag/:id","type":0,"val":"tag","end":""},{"old":"/api/v1/research/tag/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['research_tags.show_research_tag_by_id']['types'],
  },
  'research_tags.submit_research_tag': {
    methods: ["POST"],
    pattern: '/api/v1/research/tag',
    tokens: [{"old":"/api/v1/research/tag","type":0,"val":"api","end":""},{"old":"/api/v1/research/tag","type":0,"val":"v1","end":""},{"old":"/api/v1/research/tag","type":0,"val":"research","end":""},{"old":"/api/v1/research/tag","type":0,"val":"tag","end":""}],
    types: placeholder as Registry['research_tags.submit_research_tag']['types'],
  },
  'research_tags.edit_research_tag': {
    methods: ["PUT"],
    pattern: '/api/v1/research/tag/:id',
    tokens: [{"old":"/api/v1/research/tag/:id","type":0,"val":"api","end":""},{"old":"/api/v1/research/tag/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/research/tag/:id","type":0,"val":"research","end":""},{"old":"/api/v1/research/tag/:id","type":0,"val":"tag","end":""},{"old":"/api/v1/research/tag/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['research_tags.edit_research_tag']['types'],
  },
  'research_tags.destroy_research_tag': {
    methods: ["DELETE"],
    pattern: '/api/v1/research/tag/:id',
    tokens: [{"old":"/api/v1/research/tag/:id","type":0,"val":"api","end":""},{"old":"/api/v1/research/tag/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/research/tag/:id","type":0,"val":"research","end":""},{"old":"/api/v1/research/tag/:id","type":0,"val":"tag","end":""},{"old":"/api/v1/research/tag/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['research_tags.destroy_research_tag']['types'],
  },
  'research.show_all_research': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/research',
    tokens: [{"old":"/api/v1/research","type":0,"val":"api","end":""},{"old":"/api/v1/research","type":0,"val":"v1","end":""},{"old":"/api/v1/research","type":0,"val":"research","end":""}],
    types: placeholder as Registry['research.show_all_research']['types'],
  },
  'research.show_all_research_by_paginate': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/research/paginate',
    tokens: [{"old":"/api/v1/research/paginate","type":0,"val":"api","end":""},{"old":"/api/v1/research/paginate","type":0,"val":"v1","end":""},{"old":"/api/v1/research/paginate","type":0,"val":"research","end":""},{"old":"/api/v1/research/paginate","type":0,"val":"paginate","end":""}],
    types: placeholder as Registry['research.show_all_research_by_paginate']['types'],
  },
  'research.show_research_by_id': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/research/:id',
    tokens: [{"old":"/api/v1/research/:id","type":0,"val":"api","end":""},{"old":"/api/v1/research/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/research/:id","type":0,"val":"research","end":""},{"old":"/api/v1/research/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['research.show_research_by_id']['types'],
  },
  'research.show_research_by_search': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/research/search',
    tokens: [{"old":"/api/v1/research/search","type":0,"val":"api","end":""},{"old":"/api/v1/research/search","type":0,"val":"v1","end":""},{"old":"/api/v1/research/search","type":0,"val":"research","end":""},{"old":"/api/v1/research/search","type":0,"val":"search","end":""}],
    types: placeholder as Registry['research.show_research_by_search']['types'],
  },
  'research.submit_research': {
    methods: ["POST"],
    pattern: '/api/v1/research',
    tokens: [{"old":"/api/v1/research","type":0,"val":"api","end":""},{"old":"/api/v1/research","type":0,"val":"v1","end":""},{"old":"/api/v1/research","type":0,"val":"research","end":""}],
    types: placeholder as Registry['research.submit_research']['types'],
  },
  'research.edit_research': {
    methods: ["PUT"],
    pattern: '/api/v1/research/:id',
    tokens: [{"old":"/api/v1/research/:id","type":0,"val":"api","end":""},{"old":"/api/v1/research/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/research/:id","type":0,"val":"research","end":""},{"old":"/api/v1/research/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['research.edit_research']['types'],
  },
  'research.show_research_by_user_id': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/research/user/:id',
    tokens: [{"old":"/api/v1/research/user/:id","type":0,"val":"api","end":""},{"old":"/api/v1/research/user/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/research/user/:id","type":0,"val":"research","end":""},{"old":"/api/v1/research/user/:id","type":0,"val":"user","end":""},{"old":"/api/v1/research/user/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['research.show_research_by_user_id']['types'],
  },
  'research.destroy_research': {
    methods: ["DELETE"],
    pattern: '/api/v1/research/:id',
    tokens: [{"old":"/api/v1/research/:id","type":0,"val":"api","end":""},{"old":"/api/v1/research/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/research/:id","type":0,"val":"research","end":""},{"old":"/api/v1/research/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['research.destroy_research']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
