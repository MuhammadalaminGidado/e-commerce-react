import { User } from "../models/user.model.js";

export const loginUser = () => {};
export const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
