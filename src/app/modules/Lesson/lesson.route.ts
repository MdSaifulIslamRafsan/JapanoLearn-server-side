import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { LessonValidation } from "./lesson.validation";
import { LessonController } from "./lesson.controller";
import verifyAdmin from "../../middleware/VerifyAdmin";
import verifyToken from "../../middleware/VerifyToken";
const router = express.Router();

router.post(
  "/", verifyAdmin, verifyToken,
  validateRequest(LessonValidation.updateLessonSchema),
  LessonController.createLesson
);



export const LessonRoutes = router;
