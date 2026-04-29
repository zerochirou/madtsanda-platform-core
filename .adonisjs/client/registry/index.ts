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
  'students.show_all_student': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/student',
    tokens: [{"old":"/api/v1/student","type":0,"val":"api","end":""},{"old":"/api/v1/student","type":0,"val":"v1","end":""},{"old":"/api/v1/student","type":0,"val":"student","end":""}],
    types: placeholder as Registry['students.show_all_student']['types'],
  },
  'students.show_student_by_id': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/student/:id',
    tokens: [{"old":"/api/v1/student/:id","type":0,"val":"api","end":""},{"old":"/api/v1/student/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/student/:id","type":0,"val":"student","end":""},{"old":"/api/v1/student/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['students.show_student_by_id']['types'],
  },
  'students.show_student_by_user_id': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/student/user/:id',
    tokens: [{"old":"/api/v1/student/user/:id","type":0,"val":"api","end":""},{"old":"/api/v1/student/user/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/student/user/:id","type":0,"val":"student","end":""},{"old":"/api/v1/student/user/:id","type":0,"val":"user","end":""},{"old":"/api/v1/student/user/:id","type":1,"val":"id","end":""}],
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
