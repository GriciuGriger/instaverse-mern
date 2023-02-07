import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, require: true },
    password: { type: String, required: true },
    id: { type: String }
})

export default mongoose.model('User', userSchema);