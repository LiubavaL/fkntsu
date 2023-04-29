import { removeRefreshToken } from '~~/server/db/refreshTokens'
import { sendRefreshToken } from '~~/server/utils/jwt'

export default defineEventHandler(async (event) => {
  const userId = event.context.auth.user.id
  await removeRefreshToken({ userId })

  sendRefreshToken(event, '')

  return {
    success: true,
  }
})
