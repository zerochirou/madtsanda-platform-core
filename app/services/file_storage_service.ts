import type { MultipartFile } from '@adonisjs/core/bodyparser'
import drive from '@adonisjs/drive/services/main'
import { randomUUID } from 'node:crypto'

interface FileStorageServiceContract {
  storeAvatar(file: MultipartFile): Promise<string>
}

export class FileStorageService implements FileStorageServiceContract {
  public async storeAvatar(file: MultipartFile): Promise<string> {
    const key = `avatars/${randomUUID()}.${file.extname}`
    await file.moveToDisk(key)
    const url = await drive.use('s3').getUrl(key)
    return url
  }
}
