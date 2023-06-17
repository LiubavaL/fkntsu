import { getPostById } from '~~/server/db/post'

export default defineEventHandler(async (event) => {
  const postId = event.context.params.id
  const post = await getPostById(postId)

  return post
})
