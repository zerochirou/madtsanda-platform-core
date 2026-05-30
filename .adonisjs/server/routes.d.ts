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
    'auth.me': { paramsTuple?: []; params?: {} }
    'students.show_all_student': { paramsTuple?: []; params?: {} }
    'students.show_student_with_token': { paramsTuple?: []; params?: {} }
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
    'teachers.show_teacher_with_token': { paramsTuple?: []; params?: {} }
    'teachers.submit_teacher': { paramsTuple?: []; params?: {} }
    'teachers.edit_teacher': { paramsTuple?: []; params?: {} }
    'teachers.destroy_teacher': { paramsTuple?: []; params?: {} }
    'teachers.edit_teacher_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.destroy_teacher_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'news_categories.show_all_news_category': { paramsTuple?: []; params?: {} }
    'news_categories.show_news_category_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'news_categories.submit_news_category': { paramsTuple?: []; params?: {} }
    'news_categories.edit_news_category': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'news_categories.destroy_news_category': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'news.submit_news': { paramsTuple?: []; params?: {} }
    'news.show_news_with_limit': { paramsTuple?: []; params?: {} }
    'news.edit_news': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'news.destroy_news': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'news.show_all_news': { paramsTuple?: []; params?: {} }
    'news.show_all_news_paginate': { paramsTuple?: []; params?: {} }
    'news.show_news_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'news.show_news_by_search': { paramsTuple?: []; params?: {} }
    'news.show_news_by_category_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'research_tags.show_all_research_tags': { paramsTuple?: []; params?: {} }
    'research_tags.show_research_tag_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'research_tags.submit_research_tag': { paramsTuple?: []; params?: {} }
    'research_tags.edit_research_tag': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'research_tags.destroy_research_tag': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'research.show_all_research': { paramsTuple?: []; params?: {} }
    'research.show_all_research_by_paginate': { paramsTuple?: []; params?: {} }
    'research.show_research_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'research.show_research_by_search': { paramsTuple?: []; params?: {} }
    'research.submit_research': { paramsTuple?: []; params?: {} }
    'research.edit_research': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'research.show_research_by_user_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'research.destroy_research': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'health_checks.live': { paramsTuple?: []; params?: {} }
    'health_checks.ready': { paramsTuple?: []; params?: {} }
    'users.show_all_user': { paramsTuple?: []; params?: {} }
    'auth.me': { paramsTuple?: []; params?: {} }
    'students.show_all_student': { paramsTuple?: []; params?: {} }
    'students.show_student_with_token': { paramsTuple?: []; params?: {} }
    'students.show_student_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'students.show_student_by_user_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.show_all_teacher': { paramsTuple?: []; params?: {} }
    'teachers.show_teacher_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.show_teacher_by_user_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.show_teacher_with_token': { paramsTuple?: []; params?: {} }
    'news_categories.show_all_news_category': { paramsTuple?: []; params?: {} }
    'news_categories.show_news_category_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'news.show_news_with_limit': { paramsTuple?: []; params?: {} }
    'news.show_all_news': { paramsTuple?: []; params?: {} }
    'news.show_all_news_paginate': { paramsTuple?: []; params?: {} }
    'news.show_news_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'news.show_news_by_search': { paramsTuple?: []; params?: {} }
    'news.show_news_by_category_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'research_tags.show_all_research_tags': { paramsTuple?: []; params?: {} }
    'research_tags.show_research_tag_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'research.show_all_research': { paramsTuple?: []; params?: {} }
    'research.show_all_research_by_paginate': { paramsTuple?: []; params?: {} }
    'research.show_research_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'research.show_research_by_search': { paramsTuple?: []; params?: {} }
    'research.show_research_by_user_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'health_checks.live': { paramsTuple?: []; params?: {} }
    'health_checks.ready': { paramsTuple?: []; params?: {} }
    'users.show_all_user': { paramsTuple?: []; params?: {} }
    'auth.me': { paramsTuple?: []; params?: {} }
    'students.show_all_student': { paramsTuple?: []; params?: {} }
    'students.show_student_with_token': { paramsTuple?: []; params?: {} }
    'students.show_student_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'students.show_student_by_user_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.show_all_teacher': { paramsTuple?: []; params?: {} }
    'teachers.show_teacher_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.show_teacher_by_user_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.show_teacher_with_token': { paramsTuple?: []; params?: {} }
    'news_categories.show_all_news_category': { paramsTuple?: []; params?: {} }
    'news_categories.show_news_category_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'news.show_news_with_limit': { paramsTuple?: []; params?: {} }
    'news.show_all_news': { paramsTuple?: []; params?: {} }
    'news.show_all_news_paginate': { paramsTuple?: []; params?: {} }
    'news.show_news_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'news.show_news_by_search': { paramsTuple?: []; params?: {} }
    'news.show_news_by_category_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'research_tags.show_all_research_tags': { paramsTuple?: []; params?: {} }
    'research_tags.show_research_tag_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'research.show_all_research': { paramsTuple?: []; params?: {} }
    'research.show_all_research_by_paginate': { paramsTuple?: []; params?: {} }
    'research.show_research_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'research.show_research_by_search': { paramsTuple?: []; params?: {} }
    'research.show_research_by_user_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'users.submit_user': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'students.submit_student': { paramsTuple?: []; params?: {} }
    'teachers.submit_teacher': { paramsTuple?: []; params?: {} }
    'news_categories.submit_news_category': { paramsTuple?: []; params?: {} }
    'news.submit_news': { paramsTuple?: []; params?: {} }
    'research_tags.submit_research_tag': { paramsTuple?: []; params?: {} }
    'research.submit_research': { paramsTuple?: []; params?: {} }
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
    'news_categories.destroy_news_category': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'news.destroy_news': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'research_tags.destroy_research_tag': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'research.destroy_research': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PUT: {
    'students.edit_student': { paramsTuple?: []; params?: {} }
    'students.edit_student_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'teachers.edit_teacher': { paramsTuple?: []; params?: {} }
    'teachers.edit_teacher_by_id': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'news_categories.edit_news_category': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'news.edit_news': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'research_tags.edit_research_tag': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'research.edit_research': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}