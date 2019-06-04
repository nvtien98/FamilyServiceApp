import mongoose, { Types } from "mongoose";
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, required: true },
  dichvu: String,
  dichvucon: String,
  phone: { type: String, required: true },
  user_name: { type: String, required: true },
  address: { type: String, required: true },
  detail: { type: String, required: true },
  date: { type: String, required: true },
  status: {
    type: String,
    enum: ["PENDING", "PROCESSING", "COMPLETE"],
    default: "PENDING"
  }
});

// const PostSchema = new Schema({
//   // User data
//   user_id: { type: Object, required: true },
//   address: {
//     district: { type: String, required: true },
//     street: { type: String, required: true }
//   },
//   x_cordinate: { type: Number, required: true },
//   y_cordinate: { type: Number, required: true },
//   product_type: {
//     type: String,
//     enum: ["TV", "TL", "LVS", "ML", "MG", "MT", "UNKNOWN"],
//     default: "UNKNOWN"
//   },
//   product_name: { type: String, required: true },
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   phone: { type: String, required: true },
//   status: {
//     type: String,
//     enum: ["PENDING", "PROCESSING", "COMPLETE"],
//     default: "PENDING"
//   },
//   repairman_id: { type: Object }
// });

const Post = mongoose.model("Post", PostSchema);

export default Post;
