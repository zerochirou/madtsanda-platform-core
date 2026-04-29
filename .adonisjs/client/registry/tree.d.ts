/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  healthChecks: {
    live: typeof routes['health_checks.live']
    ready: typeof routes['health_checks.ready']
  }
  users: {
    showAllUser: typeof routes['users.show_all_user']
    submitUser: typeof routes['users.submit_user']
    updateUser: typeof routes['users.update_user']
    destroyUser: typeof routes['users.destroy_user']
  }
  auth: {
    login: typeof routes['auth.login']
    logout: typeof routes['auth.logout']
  }
  students: {
    showAllStudent: typeof routes['students.show_all_student']
    showStudentById: typeof routes['students.show_student_by_id']
    showStudentByUserId: typeof routes['students.show_student_by_user_id']
    editStudent: typeof routes['students.edit_student']
    destroyStudent: typeof routes['students.destroy_student']
    submitStudent: typeof routes['students.submit_student']
    editStudentById: typeof routes['students.edit_student_by_id']
    destroyStudentById: typeof routes['students.destroy_student_by_id']
  }
  teachers: {
    showAllTeacher: typeof routes['teachers.show_all_teacher']
    showTeacherById: typeof routes['teachers.show_teacher_by_id']
    showTeacherByUserId: typeof routes['teachers.show_teacher_by_user_id']
    submitTeacher: typeof routes['teachers.submit_teacher']
    editTeacher: typeof routes['teachers.edit_teacher']
    destroyTeacher: typeof routes['teachers.destroy_teacher']
    editTeacherById: typeof routes['teachers.edit_teacher_by_id']
    destroyTeacherById: typeof routes['teachers.destroy_teacher_by_id']
  }
}
