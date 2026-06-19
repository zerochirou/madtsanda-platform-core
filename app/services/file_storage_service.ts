import type { MultipartFile } from '@adonisjs/core/bodyparser'
import env from '#start/env'
import drive from '@adonisjs/drive/services/main'
import { CreateBucketCommand, HeadBucketCommand, S3Client } from '@aws-sdk/client-s3'
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

let ensureBucketPromise: Promise<void> | null = null

function createS3Client() {
  return new S3Client({
    credentials: {
      accessKeyId: env.get('S3_KEY') as string,
      secretAccessKey: env.get('S3_SECRET') as string,
    },
    endpoint: env.get('S3_ENDPOINT'),
    forcePathStyle: true,
    region: env.get('S3_REGION'),
  })
}

function isMissingBucketError(error: unknown) {
  const awsError = error as { name?: string; $metadata?: { httpStatusCode?: number } }
  return (
    awsError.name === 'NotFound' ||
    awsError.name === 'NoSuchBucket' ||
    awsError.$metadata?.httpStatusCode === 404
  )
}

function isBucketAlreadyExistsError(error: unknown) {
  const awsError = error as { name?: string; $metadata?: { httpStatusCode?: number } }
  return (
    awsError.name === 'BucketAlreadyOwnedByYou' ||
    awsError.name === 'BucketAlreadyExists' ||
    awsError.$metadata?.httpStatusCode === 409
  )
}

async function ensureStorageBucket() {
  const bucket = env.get('S3_BUCKET') as string
  const client = createS3Client()

  try {
    await client.send(new HeadBucketCommand({ Bucket: bucket }))
  } catch (error) {
    if (!isMissingBucketError(error)) {
      throw error
    }

    try {
      await client.send(new CreateBucketCommand({ Bucket: bucket }))
    } catch (createError) {
      if (!isBucketAlreadyExistsError(createError)) {
        throw createError
      }
    }
  }
}

async function ensureStorageBucketOnce() {
  ensureBucketPromise ??= ensureStorageBucket().catch((error) => {
    ensureBucketPromise = null
    throw error
  })

  await ensureBucketPromise
}

export class FileStorageService implements FileStorageServiceContract {
  public async studentProfileStore(file: MultipartFile): Promise<[string, string]> {
    await ensureStorageBucketOnce()
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
    await ensureStorageBucketOnce()
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
    await ensureStorageBucketOnce()
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
    await ensureStorageBucketOnce()
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
