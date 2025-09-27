import User from "../models/user.model.js";

export const findUserByEmail = async (email) => {
    const user = await User.findOne({email: email});
    return user
}

export const findByID = async (id) => {
    return await User.findById(id);
}

export const createUser = async (name, email, password) => {
    const newUser = new User({name:name, email:email, password:password});
    await newUser.save();
    return newUser;
}