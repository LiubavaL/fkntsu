import { createRefreshToken } from '~/server/db/refreshTokens'
import { generateAccessToken, generateRefreshToken } from '~/server/utils/jwt'

export const generateTokenPair = async (userId: string) => {
  const accessToken = generateAccessToken(userId)
  const refreshToken = generateRefreshToken(userId)

  await createRefreshToken({ token: refreshToken, userId })

  return {
    accessToken,
    refreshToken,
  }
}
