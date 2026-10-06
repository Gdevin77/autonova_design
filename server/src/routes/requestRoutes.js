import { Router } from "express";
import multer from "multer";
import { createBookingRequest, createContactRequest } from "../controllers/requestController.js";

const router = Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 4 * 1024 * 1024 }
});

router.post("/", upload.single("attachment"), createBookingRequest);
router.post("/contact", createContactRequest);

export default router;