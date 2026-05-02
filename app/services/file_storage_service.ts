import type { MultipartFile } from '@adonisjs/core/bodyparser'
import drive from '@adonisjs/drive/services/main'
import { randomUUID } from 'node:crypto'

interface FileStorageServiceContract {
  studentProfileStore(file: MultipartFile): Promise<[string, string]>
  studentProfileDestroy(key: string | null): Promise<void>
  teacherProfileStore(file: MultipartFile): Promise<[string, string]>
  teacherProfileDestroy(key: string | null): Promise<void>
  bannerImageStore(file: MultipartFile): Promise<[string, string]>
  bannerImageDestroy(key: string | null): Promise<void>
  paperStore(file: MultipartFile): Promise<[string, string]>
  paperDestroy(key: string | null): Promise<void>
}

export class FileStorageService implements FileStorageServiceContract {
  public async studentProfileStore(file: MultipartFile): Promise<[string, string]> {
    const fileName = `${randomUUID()}.${file.extname}`
    const folder = 'students_profile'
    const key = `${folder}/${fileName}`
    await file.moveToDisk(key)
    const url = await drive.use('s3').getUrl(key)
    return [key, url]
  }

  public async studentProfileDestroy(key: string | null): Promise<void> {
    await drive.use('s3').delete(String(key))
  }

  public async teacherProfileStore(file: MultipartFile): Promise<[string, string]> {
    const fileName = `${randomUUID()}.${file.extname}`
    const folder = 'teacher_profile'
    const key = `${folder}/${fileName}`
    await file.moveToDisk(key)
    const url = await drive.use('s3').getUrl(key)
    return [key, url]
  }

  public async teacherProfileDestroy(key: string | null): Promise<void> {
    await drive.use('s3').delete(String(key))
  }

  public async bannerImageStore(file: MultipartFile): Promise<[string, string]> {
    const fileName = `${randomUUID()}.${file.extname}`
    const folder = 'news_banner'
    const key = `${folder}/${fileName}`
    await file.moveToDisk(key)
    const url = await drive.use('s3').getUrl(key)
    return [key, url]
  }

  public async bannerImageDestroy(key: string | null): Promise<void> {
    await drive.use('s3').delete(String(key))
  }

  public async paperStore(file: MultipartFile): Promise<[string, string]> {
    const fileName = `${randomUUID()}.${file.extname}`
    const folder = 'research_paper'
    const key = `${folder}/${fileName}`
    await file.moveToDisk(key)
    const url = await drive.use('s3').getUrl(key)
    return [key, url]
  }

  public async paperDestroy(key: string | null): Promise<void> {
    await drive.use('s3').delete(String(key))
  }
}
