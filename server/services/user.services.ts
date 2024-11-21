import prisma from "../../prisma/client";
import { User } from "@prisma/client";
import { CreateUserInput, UpdateUserInput } from "../interfaces/user.interface";

export const getAllUsers = async (): Promise<User[]> => {
  return prisma.user.findMany();
};

export const getUserById = async (userId: number): Promise<User | null> => {
  return prisma.user.findUnique({ where: { userId } });
};

export const createUser = async (
  data: CreateUserInput
): Promise<User | null> => {
  return prisma.user.create({ data });
};

export const deleteUser = async (userId: number): Promise<User | null> => {
  return prisma.user.delete({ where: { userId } });
};

export const updateUser = async (
  data: UpdateUserInput,
  userId: number
): Promise<User | null> => {
  return prisma.user.update({ data, where: { userId } });
};
