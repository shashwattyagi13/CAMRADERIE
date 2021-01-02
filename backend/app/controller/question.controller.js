const db = require('../models')
const Question = db.questions;

exports.create = (req, res) => {
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    
    const question = new Question({
        title: req.body.title
    });

    question
      .save(question)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Question."
        });
      });
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Question.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving questions."
        });
      });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Question.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Question with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Question with id=" + id });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Question.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Question with id=${id}. Maybe Question was not found!`
          });
        } else {
          res.send({
            message: "Question was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Question with id=" + id
        });
      });
};

exports.deleteAll = (req, res) => {
    Question.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Questions were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all questions."
        });
      });
};
  