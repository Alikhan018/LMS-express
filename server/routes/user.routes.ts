import express from "express";
import {
  createUserController,
  deleteUserController,
  getUser,
  getUsers,
  updateUserController,
} from "../controllers/user.controller";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUserController);
router.get("/:userId", getUser);
router.delete("/:userId", deleteUserController);
router.put("/:userId", updateUserController);

export default router;
