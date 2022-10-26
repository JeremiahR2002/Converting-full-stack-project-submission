const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const namesSchema = new Schema({
content: {
    type: String, default: "username"
}
})


module.exports.Router 

const Names = mongoose.model("names", namesSchema);
module.exports = Names;

