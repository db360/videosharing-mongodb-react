 import mongoose from "mongoose";
 import uniqueValidator from 'mongoose-unique-validator'

 const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    img: {
        type: String,
    },
    subscribers: {
        type: Number,
        default: 0,
    },
    subscribedUsers: {
        type: [String]
    }

 }, {timestamps: true});

 const UserSchemaVal = UserSchema.plugin(uniqueValidator)

 export default mongoose.models.User || mongoose.model("User", UserSchemaVal);