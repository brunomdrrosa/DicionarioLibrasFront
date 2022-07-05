import { Router } from "express";
import { giveGreetings } from "../controllers/controllers";

const router: Router = Router();

router.get("/", giveGreetings);

export default router;
