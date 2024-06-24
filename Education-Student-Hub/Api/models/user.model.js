import mongoose from "mongoose"

const defaultProfileImage = "../../User/src/assets/images/profile.jpeg"; 

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: defaultProfileImage
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
