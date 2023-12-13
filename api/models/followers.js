import mongoose from 'mongoose';
import bcrypt from "bcrypt";

//schema for user follwers
const followerSchema = new mongoose.Schema({
    userid:{
        type: String,
        required: "User",

    },
    followerid:{
        type: String,
        required: "Follower user"
    }
})

followerSchema.index({ userid: 1, followerid: 1 }, { unique: true });

const model = mongoose.model('followers', followerSchema);
export default model;