import { updatePost } from '~~/server/db/post'

export default defineEventHandler(async (event) => {
  const { id, ...body } = await readBody(event)
  const postId = event.context.params.id

  const post = await updatePost(postId, body)

  return {
    post,
    postId,
  }
})
