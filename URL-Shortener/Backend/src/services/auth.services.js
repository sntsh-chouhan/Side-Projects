import { createUser, findUserByEmail, findUserByEmailAndPasword} from "../dao/user.dao.js"
import { ConflictError } from "../utils/errorHandler.js"
import {signToken} from "../utils/helper.js"

export const registerUser = async (name, email, password) => {
    const user = await findUserByEmail(email)
    
    if(user) throw new ConflictError("User already exists")

    const newUser = await createUser(name, email, password)
    
    const token = await signToken({id: newUser._id})

    return {token, user : newUser}
}

export const loginUser = async (email, password) => {
    const newUser = await findUserByEmailAndPasword(email)

    if(!newUser) throw new Error("Invalid CREDS")
    
    const isPasswordValid = await newUser.comparePassword(password)
    if(!isPasswordValid) throw new Error("Invalid CREDS")

    const token = signToken({id: newUser._id})
    return {token, user : newUser}
    
}
