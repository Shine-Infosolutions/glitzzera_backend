import express from "express";
import { registerUser, loginUser, getAllUsersWithDetails } from "../controllers/userController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/register", upload.single("avatar"), registerUser);
router.post("/login", loginUser);
router.get("/info", getAllUsersWithDetails);

export default router;
