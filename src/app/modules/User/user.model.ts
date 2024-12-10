import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";


const userSchema = new Schema<TUser>({
    name: {
        type: String,
        required: true
    },
    email :{
        type: String,
        required: true,
        unique: true
    },
    photo : {
        type : String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    role : {
        type: String,
        enum: ['admin', "user"],
        default: 'user'
    }
},
{
    timestamps : true
}
)

const User =  model<TUser>("User" , userSchema)
export default User;