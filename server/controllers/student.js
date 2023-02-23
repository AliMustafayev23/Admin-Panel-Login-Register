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
export const updateStudent = (req, res) => {
  let id = req.params.id;
  Student.findByIdAndUpdate(id, req.body, (err, docs) => {
    if (!err) {
      res.send({ message: "updated" });
    }
  });
};
export const getStudentById = (req, res) => {
  let id = req.params.id;
  Student.findById(id, (err, doc) => {
    if (!err) {
      res.send(doc);
    }
  });
};
export const deleteStudent = (req, res) => {
  let id = req.params.id;
  Student.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.send({ message: "deleted" });
    }
  });
};
export const signup = async (req, res) => {
  const { username, password, email, age, image, gender,type } = req.body;
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
      age: age,
      gender: gender,
      image: `http://localhost:8000/${req.file.path}`,
      type: type,
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
