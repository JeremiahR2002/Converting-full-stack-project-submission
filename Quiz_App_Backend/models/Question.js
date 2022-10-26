const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  quiz_id: {
    type: Number,
  },
  answer: [
    {
      title: String,
      points: Number
    },
  ],
  imageURL: String,
});

const Question = mongoose.model("questions", questionSchema);


module.exports.Router 
=======
module.exports = Question;

