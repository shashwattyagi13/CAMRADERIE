const { Schema } = require("mongoose");

module.exports = mongoose => {
  var schema = mongoose.Schema({
      title: String,
      // user: {
      //   type: Schema.Types.ObjectId,
      //   ref: "user"
      // }
      // answers: [{
      //     type: Schema.Types.ObjectId,
      //     ref: "answer"
      // }]
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Question = mongoose.model("question", schema);
  return Question;
};