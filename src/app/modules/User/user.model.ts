import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt";
import { HttpStatus } from "http-status-ts";
import AppError from "../../error/AppError";

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// Hashing the password before saving to the database
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

//   check email address already exists
userSchema.pre("save", async function (next) {
  const isExistEmail = await User.findOne({ email: this.email });

  if (isExistEmail) {
    throw new AppError(HttpStatus.CONFLICT, "Email already exists");
  }
  next();
});

const User = model<TUser>("User", userSchema);
export default User;
