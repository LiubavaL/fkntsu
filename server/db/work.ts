import type { Prisma } from '@prisma/client'
import { prisma } from '.'

export const getAllWorks = () => {
  return prisma.work.findMany()
}

export const getWorkById = (id: string) => {
  return prisma.work.findUnique({
    where: { id },
  })
}

export const createWork = (workData: Prisma.WorkCreateInput) => {
  return prisma.work.create({
    data: workData,
  })
}

export const updateWork = (workId: string, workData: Prisma.WorkUpdateInput) => {
  return prisma.work.update({
    data: workData,
    where: { id: workId },
  })
}

export const deleteWork = (workId: string) => {
  return prisma.work.delete({
    where: { id: workId },
  })
}
