import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.signup = async function (email, password) {
  const emailExists = await this.findOne({ email });
  if (emailExists) {
    throw new Error("This email is already in use..");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user;
};

export const User = mongoose.model("User", userSchema);
