import { Router } from "express";
import { addUsers, deleteUsers, getUsers, updateUsers } from "../controllers/users.controller.js";
import { loginUser, signupUser } from "../controllers/usersAuth.controller.js";
const router = Router();


router.get('/employees',getUsers);
router.post('/user/signup',signupUser);
router.post('/user/login',loginUser);
router.post('/employees/add',addUsers);
router.put('/employees/update',updateUsers);
router.post('/employees/delete',deleteUsers);
export default router;