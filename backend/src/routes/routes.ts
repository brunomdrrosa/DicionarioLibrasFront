import { Router } from "express";
import UserController from "../controllers/UserController";

const router: Router = Router();

router.get("/", UserController.index);
router.post("/", UserController.create);

export default router;
