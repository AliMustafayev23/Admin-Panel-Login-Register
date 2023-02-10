import Course from "../models/course.js";

export const getCourse = (req, res) => {
  Course.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    }
  });
};
export const getCourseById = (req, res) => {
  let id = req.params.id;
  Course.findById(id, (err, doc) => {
    if (!err) {
      res.send(doc);
    }
  });
};
export const deleteCourse = (req, res) => {
  let id = req.params.id;
  Course.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.send({ message: "deleted" });
    }
  });
};
export const createCourse = (req, res) => {
  let course = new Course({
    image: req.body.image,
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    tag: req.body.tag,
    price: req.body.price,
    members: req.body.members,
  });
  course.save();
  res.send({ message: "added new course" });
};
export const updateCourse = (req, res) => {
  let id = req.params.id;
  Course.findByIdAndUpdate(id, req.body, (err, docs) => {
    if (!err) {
      res.send({ message: "updated" });
    }
  });
};
