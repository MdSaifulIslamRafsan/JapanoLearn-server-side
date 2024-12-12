import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { LessonValidation } from "./lesson.validation";
import { LessonController } from "./lesson.controller";
import verifyAdmin from "../../middleware/VerifyAdmin";
import verifyToken from "../../middleware/VerifyToken";
const router = express.Router();

router.post(
  "/", verifyToken , verifyAdmin,
  validateRequest(LessonValidation.updateLessonSchema),
  LessonController.createLesson
);

router.get("/",  verifyToken , verifyAdmin, LessonController.getAllLessons);

router.patch("/:id",  verifyToken , verifyAdmin,  LessonController.updateLesson);

export const LessonRoutes = router;
