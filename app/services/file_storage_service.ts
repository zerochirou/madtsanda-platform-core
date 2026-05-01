import type { MultipartFile } from '@adonisjs/core/bodyparser'
import drive from '@adonisjs/drive/services/main'
import { randomUUID } from 'node:crypto'

interface FileStorageServiceContract {
  profileStore(file: MultipartFile): Promise<[string, string]>
  profileDestroy(key: string | null): Promise<void>
  storeAvatar(file: MultipartFile): Promise<string>
}

export class FileStorageService implements FileStorageServiceContract {
  public async profileStore(file: MultipartFile): Promise<[string, string]> {
    const fileName = `${randomUUID()}.${file.extname}`
    const folder = 'students_profile'
    const key = `${folder}/${fileName}`
    await file.moveToDisk(key)
    const url = await drive.use('s3').getUrl(key)
    return [key, url]
  }

  public async profileDestroy(key: string | null): Promise<void> {
    await drive.use('s3').delete(String(key))
  }

  public async storeAvatar(file: MultipartFile): Promise<string> {
    const key = `avatars/${randomUUID()}-${file.extname}`
    await file.moveToDisk(key)
    const url = await drive.use('s3').getUrl(key)
    return url
  }
}
