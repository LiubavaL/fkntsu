import bcrypt from 'bcrypt'
import { getUserByEmail } from '~~/server/db/user'
import { sendRefreshToken } from '~~/server/utils/jwt'
import { userTransformer } from '~~/server/transformers/user'
import { generateTokenPair } from '~/server/lib/auth'

export default defineEventHandler(async (event) => {
  const data = await readBody(event)
  const user = await getUserByEmail(data.email)

  if (!user || !bcrypt.compareSync(data.password, user.password))
    return sendError(event, createError({ statusCode: 403 }))

  /// generate tokens
  const { accessToken, refreshToken } = await generateTokenPair(user.id)

  sendRefreshToken(event, refreshToken)
  // sendAccessToken(event, accessToken)

  return {
    accessToken,
    user: userTransformer(user),
  }
})
