const db = require('../models')
const Answer = db.answers;

exports.create = (req, res) => {
    if (!req.body.content) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const answer = new Answer({
        content: req.body.content
    });

    answer
        .save(answer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Answer."
            });
        });
};

exports.findAll = (req, res) => {
    const content = req.query.content;
    var condition = content ? { content: { $regex: new RegExp(content), $options: "i" } } : {};

    Answer.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving answers."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Answer.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Answer with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Answer with id=" + id });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Answer.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Answer with id=${id}. Maybe Answer was not found!`
                });
            } else {
                res.send({
                    message: "Answer was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Answer with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Answer.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Answer were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all answers."
            });
        });
};