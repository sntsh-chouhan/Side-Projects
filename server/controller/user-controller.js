import User from "../model/user.js";
import Token from "../model/token.js";

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import { response } from "express";

dotenv.config();

export const singupUser = async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = { username: req.body.username, name: req.body.name, password: hashedPassword }

        const newUser = new User(user);
        await newUser.save();

        return res.status(200).json({msg: 'signup successfull'})
    } catch (error) {
        return res.status(500).json({msg: 'signup fail'})
    }

}

export const loginUser = async(req, res) => {
    let user = await User.findOne({username : req.body.username});
    if(!user)return res.status(404).json({msg: 'user not found'});

    try {
        let match = await bcrypt.compare(req.body.password, user.password);
        if(match){
            const accessToken =jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, {expiresIn: '15m'});
            const refreshToken =jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);

            const newToken = new Token({token: refreshToken})
            await newToken.save();

            return res.status(200).json({accessToken, refreshToken:refreshToken, name:user.name, username: user.username})
        }else{
            return res.status(400).json({msg: 'password dont not match'});
        }
    } catch (error) {
        return res.status(500).json({msg: 'login fail'})
    }
    
    // try {

    //     const hashedPassword = await bcrypt.hash(req.body.password, 10);

    //     if(hashedPassword === user.password){
    //         return user;
    //     }else{
            
    //     }

    // } catch (error) {
    //     return res.status(500).json({msg: 'login fail'})
    // }

}

export const logoutUser = async (request, response) => {
    const token = request.body.token;
    await Token.deleteOne({ token: token });

    response.status(204).json({ msg: 'logout successfull' });
}
