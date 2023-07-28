import { Router } from "express";
import { addUsers, deleteUsers, getUsers, updateUsers } from "../controllers/users.controller.js";
const router = Router();


router.get('/employees',getUsers);
router.post('/employees/add',addUsers);
router.put('/employees/update',updateUsers);
router.post('/employees/delete',deleteUsers);
export default router;