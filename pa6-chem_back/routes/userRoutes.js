import express from "express";
import {
  getAllUsers,
  createUser,
  deleteUser,
  loginUser,
  getRoles,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getAllUsers); // Получить всех пользователей
router.post("/register", createUser); // Создать нового пользователя
router.delete("/users/remove/:id", deleteUser); // Удалить пользователя по ID
router.post("/login", loginUser); // Авторизация пользователя
router.get("/roles", getRoles); // Получить роли пользователей
export default router;
