import { type ModelPaginatorContract } from '@adonisjs/lucid/types/model'

export class ResponseFormatter {
  static success(data: any, meta: any = null) {
    return {
      data,
      meta,
      error: null,
    }
  }

  static error(message: string, code: string | number = 400, details: any = null) {
    return {
      data: null,
      meta: null,
      error: {
        code,
        message,
        details,
      },
    }
  }

  static paginate(paginator: ModelPaginatorContract<any>) {
    const json = paginator.toJSON()
    return {
      data: json.data,
      metadata: json.meta,
    }
  }
}
