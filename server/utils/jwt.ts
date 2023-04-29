import type { H3Event } from 'h3'
import jwt from 'jsonwebtoken'
import cookie from 'cookie-universal'

export const generateAccessToken = (userId: string) => {
  const config = useRuntimeConfig()
  return jwt.sign({ userId }, config.jwtAccessSecret, { expiresIn: '3m' })
}

export const generateRefreshToken = (userId: string) => {
  const config = useRuntimeConfig()
  return jwt.sign({ userId }, config.jwtRefreshSecret, { expiresIn: '4h' })
}

export const verifyRefreshToken = (token: string) => {
  const config = useRuntimeConfig()
  try {
    return jwt.verify(token, config.jwtRefreshSecret)
  }
  catch (error) {
    return null
  }
}

export const verifyAccessToken = (token?: string) => {
  if (!token)
    return null

  const config = useRuntimeConfig()
  try {
    return jwt.verify(token, config.jwtAccessSecret)
  }
  catch (error) {
    return null
  }
}

export const sendRefreshToken = (event: H3Event, token: string) => {
  setCookie(event, 'refresh_token', token, {
    httpOnly: true,
    sameSite: true,
  })
}

// not used for now
export const sendAccessToken = (event: H3Event, token: string) => {
  setCookie(event, 'access_token', token, {
    httpOnly: true,
    sameSite: true,
  })
}
