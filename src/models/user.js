import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    username: {
        type : String,
        required:true
    }
    

},{
    versionKey:false
});

const User = mongoose.model("User", UserSchema);
export default User;