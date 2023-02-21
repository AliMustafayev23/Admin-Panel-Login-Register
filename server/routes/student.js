import express from "express";
import multer from "multer";
import { signup, signin, getStudent } from "../controllers/student.js";
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
router.post("/signup", upload.single("images"), signup);
router.post("/signin", signin);
export default router;
