const mongoose = require("mongoose");
const { Schema } = mongoose;

const purchasedClassSchema = new Schema({
  classname: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
  },
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: "UserList",
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: "ClassList",
  },
});

module.exports = mongoose.model("SellList", purchasedClassSchema);
