import env from '#start/env'
import { defineConfig, services } from '@adonisjs/drive'

const driveConfig = defineConfig({
  default: env.get('DRIVE_DISK'),

  /**
   * The services object can be used to configure multiple file system
   * services each using the same or a different driver.
   */
  services: {
    s3: services.s3({
      credentials: {
        accessKeyId: env.get('S3_KEY') as string,
        secretAccessKey: env.get('S3_SECRET') as string,
      },
      region: env.get('S3_REGION'),
      bucket: env.get('S3_BUCKET') as string,
      endpoint: env.get('S3_ENDPOINT'),
      visibility: 'public',
      forcePathStyle: true,
      supportsACL: false,
    }),
  },
})

export default driveConfig

declare module '@adonisjs/drive/types' {
  export interface DriveDisks extends InferDriveDisks<typeof driveConfig> {}
}
