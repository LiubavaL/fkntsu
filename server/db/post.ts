import type { Prisma } from '@prisma/client'
import { prisma } from '.'

export const getPostById = (id: string) => {
  return prisma.post.findUnique({ where: { id } })
}

export const getAllPosts = () => {
  return prisma.post.findMany()
}

export const createPost = (postData: Prisma.PostCreateInput) => {
  return prisma.post.create({
    data: postData,
  })
}

export const editPost = (postId: string, postData: Prisma.PostUpdateInput) => {
  return prisma.post.update({ data: postData, where: { id: postId } })
}

export const deletePost = (postId: string) => {
  return prisma.post.delete({ where: { id: postId } })
}
