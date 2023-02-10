import express from "express";
import {
  getCourse,
  getCourseById,
  deleteCourse,
  createCourse,
  updateCourse,
} from "../controllers/course.js";
const router = express.Router();
router.get("/", getCourse);
router.post("/", createCourse);
router.delete("/:id", deleteCourse);
router.get("/:id", getCourseById);
router.put("/:id", updateCourse);
export default router;
