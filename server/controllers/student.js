import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Student from "../models/student.js";
const secret = "test";
export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldStudent = await Student.findOne({ email });
    if (!oldStudent) return res.status(404).json({ message: "User not found" });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      oldStudent.password
    );
    if (!isPasswordCorrect)
      return res.status(404).json({ message: "Invalid credantials" });
    const token = jwt.sign(
      { email: oldStudent.email, id: oldStudent._id },
      secret,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: oldStudent, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};
export const getStudent = (req, res) => {
  Student.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    }
    if (err) {
      console.log(err);
    }
  });
};
export const signup = async (req, res) => {
  const { username, password, email } = req.body;
  console.log(req.file);
  try {
    const oldStudent = await Student.findOne({ email });
    if (oldStudent) {
      return res.status(400).json({ message: "User already exits!" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await Student.create({
      email,
      password: hashedPassword,
      username: username,
      // age: age,
      // gender: gender,
      images: `http://localhost:8000/${req.file.path}`,
      image: "https://cutewallpaper.org/24/user-png/2842117751.jpg",
    });
    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });
    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Sonething went wrong" });
    console.log(error);
  }
};
