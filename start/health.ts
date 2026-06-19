import {
  HealthChecks,
  DiskSpaceCheck,
  MemoryHeapCheck,
  MemoryRSSCheck,
} from '@adonisjs/core/health'
import { DbCheck, DbConnectionCountCheck } from '@adonisjs/lucid/database'
import db from '@adonisjs/lucid/services/db'

export const healthChecks = new HealthChecks().register([
  new DiskSpaceCheck().warnWhenExceeds(85).failWhenExceeds(90),
  new MemoryHeapCheck(),
  new MemoryRSSCheck(),
  new DbCheck(db.connection()),
  new DbConnectionCountCheck(db.connection()),
])
