import express from "express";
import {
  getAllUsers,
  createUser,
  deleteUser,
  loginUser,
  getRoles,
  getUserById,
} from "../controllers/userController.js";
import { get } from "http";

const router = express.Router();

router.get("/users", getAllUsers); // Получить всех пользователей
router.post("/register", createUser); // Создать нового пользователя
router.delete("/users/remove/:id", deleteUser); // Удалить пользователя по ID
router.post("/login", loginUser); // Авторизация пользователя
router.get("/roles", getRoles); // Получить роли пользователей
router.get("/users/:id", getUserById);
export default router;
