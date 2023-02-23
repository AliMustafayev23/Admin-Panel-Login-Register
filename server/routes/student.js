import express from "express";
import multer from "multer";
import {
  signup,
  signin,
  getStudent,
  deleteStudent,
  getStudentById,
  updateStudent,
} from "../controllers/student.js";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/svg" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({ storage: storage, limits: 1024 * 1024 * 5 });

const router = express.Router();
router.get("/", getStudent);
router.delete("/:id", deleteStudent);
router.get("/:id", getStudentById);
router.put("/:id", updateStudent);
router.post("/signup", upload.single("image"), signup);
router.post("/signin", signin);
export default router;
