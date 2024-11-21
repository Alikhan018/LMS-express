import { Request, Response } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} from "../services/user.services";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await getAllUsers();
    res.json({ res: data });
  } catch (err) {
    res.json({ res: err });
  }
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = parseInt(req.params.userId);
    const data = await getUserById(userId);
    res.json({ res: data });
  } catch (err) {
    res.json({ res: err });
  }
};

export const createUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await createUser(req.body);
    res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = parseInt(req.params.userId);
    await deleteUser(userId);
    res.json({ message: "user deleted" });
  } catch (err) {
    res.json({ err });
  }
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = parseInt(req.params.userId);
    await updateUser(req.body, userId);
    res.json({ message: "user update" });
  } catch (err) {
    res.json({ err });
  }
};
