import { getAllPosts } from '~~/server/db/post'

export default defineEventHandler(async () => {
  const allPosts = await getAllPosts()
  return allPosts
})
