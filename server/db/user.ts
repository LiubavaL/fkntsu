import type { Prisma } from '@prisma/client'
import bcrypt from 'bcrypt'
import { prisma } from '.'

export const createUser = (userData: Prisma.UserCreateInput) => {
  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  }

  return prisma.user.create({
    data: finalUserData,
  })
}

export const getUserByEmail = (email: string) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  })
}

export const getUserById = (id: string) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  })
}
