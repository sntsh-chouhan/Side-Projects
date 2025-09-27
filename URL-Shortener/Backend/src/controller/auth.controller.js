import { cookieOptions } from "../config/config.js";
import { loginUser, registerUser } from "../services/auth.services.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const register_user = wrapAsync( async (req, res) => {
    const {name, email, password} = req.body
    const {token, user} = await registerUser(name, email, password)
    
    req.user = user
    res.cookie("accessToken" , token, cookieOptions)
    res.status(200).json({message : "login success"})
})

export const login_user = wrapAsync( async (req, res) => {
    const {email, password} = req.body;
    const {token, user} = await loginUser(email, password)

    req.user = user
    res.cookie("accessToken" , token, cookieOptions)
    res.status(200).json({message : "login success"})
})


