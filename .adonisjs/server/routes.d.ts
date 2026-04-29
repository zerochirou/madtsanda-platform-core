import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'health_checks.live': { paramsTuple?: []; params?: {} }
    'health_checks.ready': { paramsTuple?: []; params?: {} }
    'users.show_all_user': { paramsTuple?: []; params?: {} }
    'users.submit_user': { paramsTuple?: []; params?: {} }
    'users.update_user': { paramsTuple?: []; params?: {} }
    'users.destroy_user': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'auth.logout': { paramsTuple?: []; params?: {} }
    'students.show_all_student': { paramsTuple?: []; params?: {} }
    'students.show_student_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'students.show_student_by_user_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'students.edit_student': { paramsTuple?: []; params?: {} }
    'students.destroy_student': { paramsTuple?: []; params?: {} }
    'students.submit_student': { paramsTuple?: []; params?: {} }
    'students.edit_student_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'students.destroy_student_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.show_all_teacher': { paramsTuple?: []; params?: {} }
    'teachers.show_teacher_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.show_teacher_by_user_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.submit_teacher': { paramsTuple?: []; params?: {} }
    'teachers.edit_teacher': { paramsTuple?: []; params?: {} }
    'teachers.destroy_teacher': { paramsTuple?: []; params?: {} }
    'teachers.edit_teacher_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.destroy_teacher_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'health_checks.live': { paramsTuple?: []; params?: {} }
    'health_checks.ready': { paramsTuple?: []; params?: {} }
    'users.show_all_user': { paramsTuple?: []; params?: {} }
    'students.show_all_student': { paramsTuple?: []; params?: {} }
    'students.show_student_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'students.show_student_by_user_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.show_all_teacher': { paramsTuple?: []; params?: {} }
    'teachers.show_teacher_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.show_teacher_by_user_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'health_checks.live': { paramsTuple?: []; params?: {} }
    'health_checks.ready': { paramsTuple?: []; params?: {} }
    'users.show_all_user': { paramsTuple?: []; params?: {} }
    'students.show_all_student': { paramsTuple?: []; params?: {} }
    'students.show_student_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'students.show_student_by_user_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.show_all_teacher': { paramsTuple?: []; params?: {} }
    'teachers.show_teacher_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.show_teacher_by_user_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'users.submit_user': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'students.submit_student': { paramsTuple?: []; params?: {} }
    'teachers.submit_teacher': { paramsTuple?: []; params?: {} }
  }
  PATCH: {
    'users.update_user': { paramsTuple?: []; params?: {} }
  }
  DELETE: {
    'users.destroy_user': { paramsTuple?: []; params?: {} }
    'auth.logout': { paramsTuple?: []; params?: {} }
    'students.destroy_student': { paramsTuple?: []; params?: {} }
    'students.destroy_student_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.destroy_teacher': { paramsTuple?: []; params?: {} }
    'teachers.destroy_teacher_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PUT: {
    'students.edit_student': { paramsTuple?: []; params?: {} }
    'students.edit_student_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.edit_teacher': { paramsTuple?: []; params?: {} }
    'teachers.edit_teacher_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}