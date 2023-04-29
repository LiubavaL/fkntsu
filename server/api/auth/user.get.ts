import { userTransformer } from '~/server/transformers/user'

export default defineEventHandler(async (event) => {
  return userTransformer(event.context.auth?.user)
})
