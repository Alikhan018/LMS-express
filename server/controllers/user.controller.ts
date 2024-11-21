import { Request, Response } from "express";
import { getAllUsers, getUserById } from "../services/user.services";

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
