const { Schema } = require("mongoose");

module.exports = mongoose => {
    var schema = mongoose.Schema({
        username: { type: String, unique: true, required: true },
        hash: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        createdDate: { type: Date, default: Date.now },
        // questions: [{
        //     type: Schema.Types.ObjectId,
        //     ref: "question"
        // }],
        // answers: [{
        //     type: Schema.Types.ObjectId,
        //     ref: "answer"
        // }]
    });
  
    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.hash;
        }
    });
  
    const User = mongoose.model("user", schema);
    return User;
};
