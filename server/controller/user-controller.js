import User from "../model/user.js";

export const signupUser = async(req, res) => {
    try {
        const user = req.body;

        const newUser = new User(user);
        await newUser.save();

        return res.status(200).json({msg: 'signup successfull'})
    } catch (error) {
        return res.status(500).json({msg: 'signup fail'})
    }

}