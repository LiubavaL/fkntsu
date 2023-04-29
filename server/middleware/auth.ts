import { getUserById } from '../db/user'
import { verifyAccessToken } from '~/server/utils/jwt'

const API_ROUTES = [
  '/api/auth/user',
  '/api/posts',
]

const isApiEndpoint = (url: string) => {
  return API_ROUTES.includes(url)
}

export default defineEventHandler(async (event) => {
  const { url } = event.node.req

  if (!url || !isApiEndpoint(url))
    return

  const token = event.node.req.headers.authorization?.split(' ')[1]

  if (!token) {
    return sendError(event, createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    }))
  }

  const decodedToken = verifyAccessToken(token)

  if (!decodedToken) {
    return sendError(event, createError({
      statusCode: 403,
      statusMessage: 'Forbidden',
    }))
  }

  try {
    const { userId } = decodedToken
    const user = await getUserById(userId)

    event.context.auth = { user }
  }
  catch (error) {
    console.error(error)
  }
})
