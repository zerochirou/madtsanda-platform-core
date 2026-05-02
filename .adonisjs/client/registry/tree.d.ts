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
  newsCategories: {
    showAllNewsCategory: typeof routes['news_categories.show_all_news_category']
    showNewsCategoryById: typeof routes['news_categories.show_news_category_by_id']
    submitNewsCategory: typeof routes['news_categories.submit_news_category']
    editNewsCategory: typeof routes['news_categories.edit_news_category']
    destroyNewsCategory: typeof routes['news_categories.destroy_news_category']
  }
  news: {
    submitNews: typeof routes['news.submit_news']
    editNews: typeof routes['news.edit_news']
    destroyNews: typeof routes['news.destroy_news']
    showAllNews: typeof routes['news.show_all_news']
    showAllNewsPaginate: typeof routes['news.show_all_news_paginate']
    showNewsById: typeof routes['news.show_news_by_id']
    showNewsBySearch: typeof routes['news.show_news_by_search']
    showNewsByCategoryId: typeof routes['news.show_news_by_category_id']
  }
  researchTags: {
    showAllResearchTags: typeof routes['research_tags.show_all_research_tags']
    showResearchTagById: typeof routes['research_tags.show_research_tag_by_id']
    submitResearchTag: typeof routes['research_tags.submit_research_tag']
    editResearchTag: typeof routes['research_tags.edit_research_tag']
    destroyResearchTag: typeof routes['research_tags.destroy_research_tag']
  }
  research: {
    showAllResearch: typeof routes['research.show_all_research']
    showResearchById: typeof routes['research.show_research_by_id']
    showResearchBySearch: typeof routes['research.show_research_by_search']
    submitResearch: typeof routes['research.submit_research']
    editResearch: typeof routes['research.edit_research']
    showResearchByUserId: typeof routes['research.show_research_by_user_id']
    destroyResearch: typeof routes['research.destroy_research']
  }
}
