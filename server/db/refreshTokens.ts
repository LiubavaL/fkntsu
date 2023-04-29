import type { Prisma } from '@prisma/client'
import { prisma } from '.'

// interface RefreshToken {
//   token: string
//   userId: string
// }

export const createRefreshToken = (refreshToken: Prisma.RefreshTokenCreateInput) => {
  return prisma.refreshToken.create({
    data: refreshToken,
  })
}

export const removeRefreshToken = (data: Partial<Prisma.RefreshTokenCreateInput>) => {
  return prisma.refreshToken.delete({
    where: data,
  })
}

export const findRefreshToken = (token: string) => {
  return prisma.refreshToken.findUnique({
    where: {
      token,
    },
  })
}
