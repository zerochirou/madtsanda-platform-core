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
}
