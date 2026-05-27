/*
|--------------------------------------------------------------------------
| Bouncer abilities
|--------------------------------------------------------------------------
|
| You may export multiple abilities from this file and pre-register them
| when creating the Bouncer instance.
|
| Pre-registered policies and abilities can be referenced as a string by their
| name. Also they are must if want to perform authorization inside Edge
| templates.
|
*/

import type Research from '#models/research'
import type User from '#models/user'
import { Bouncer } from '@adonisjs/bouncer'

export const adminAccessControll = Bouncer.ability((user: User) => {
  return user.role === 'admin' || user.role === 'super_user'
})

export const researcherAccessControll = Bouncer.ability((user: User, research: Research) => {
  return user.id === research.userId
})
