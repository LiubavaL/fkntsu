// import { v4 as uuid } from 'uuid'
import { findRefreshToken, removeRefreshToken } from '~/server/db/refreshTokens'
import { sendRefreshToken } from '~~/server/utils/jwt'
import { generateTokenPair } from '~/server/lib/auth'

export default defineEventHandler(async (event) => {
  const refreshToken = getCookie(event, 'refresh_token')

  if (!refreshToken)
    return sendError(event, createError({ statusCode: 401, statusMessage: 'Refresh token not provided' }))

  // find db refresh token
  const dbRefreshToken = await findRefreshToken(refreshToken)

  if (!dbRefreshToken)
    return sendError(event, createError({ statusCode: 403, statusMessage: 'Invalid refresh token' }))

  const newAuthTokens = await generateTokenPair(dbRefreshToken.userId)

  await removeRefreshToken({ token: refreshToken })

  sendRefreshToken(event, newAuthTokens.refreshToken)
  // sendAccessToken(event, newAuthTokens.accessToken)

  return {
    accessToken: newAuthTokens.accessToken,
  }
})
