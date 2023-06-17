import { createPost } from '~~/server/db/post'

export default defineEventHandler(async (event) => {
  const userId = event.context.auth?.user.id
  const body = await readBody(event)
  const data = { ...body, authorId: userId }

  const responce = await createPost(data)

  return {
    responce,
    userId,
  }
})
