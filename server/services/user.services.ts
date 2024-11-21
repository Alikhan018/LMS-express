import prisma from "../../prisma/client";
import { User } from "@prisma/client";

export const getAllUsers = async (): Promise<User[]> => {
  return prisma.user.findMany();
};

export const getUserById = async (userId: number): Promise<User | null> => {
  return prisma.user.findUnique({ where: { userId } });
};
