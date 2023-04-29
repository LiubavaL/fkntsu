import { sendError } from 'h3'
import { createUser } from '~~/server/db/user'
import { userTransformer } from '~~/server/transformers/user'

export default defineEventHandler(async (event) => {
  const { username, email, password, repeatPassword, name } = await readBody(event)
  const userData = {
    username,
    email,
    password,
    name,
  }

  if (!username || !email || !password || !repeatPassword || !name)
    return sendError(event, createError({ statusCode: 400, statusMessage: 'Invalid params' }))

  if (password !== repeatPassword)
    return sendError(event, createError({ statusCode: 400, statusMessage: 'Password do not match' }))

  const user = await createUser(userData)

  return {
    body: userTransformer(user),
  }
})
