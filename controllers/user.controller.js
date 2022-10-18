import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const salt = await bcryptjs.genSalt();
    const hash = await bcryptjs.hash(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).json("User not found");
    }
    const isPasswordCorrect = await bcryptjs.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect){
      return res.status(401).json("Incorrect Password")
    }
    const {password,...others} = user._doc
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updateUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcryptjs.genSalt();
      req.body.password = await bcryptjs.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json(updateUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(401).json("You can only update your accourt");
  }
};

export const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      // const user = await User.findById(req.params.id)
      await User.findByIdAndDelete(req.params.id);
      return res.status(200).json("User has been deleted ...");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(401).json("You can only delete your accourt");
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (error) {
    return res.status(404).json("User not found");
  }
};
