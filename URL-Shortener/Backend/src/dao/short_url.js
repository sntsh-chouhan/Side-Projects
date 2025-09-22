import urlSchema from "../models/short_url.model.js";
import { ConflictError } from "../utils/errorHandler.js";

export const saveUrl = async (full_url, short_url, usesId) => {
    try {
        const newURL = new urlSchema({
            full_url,
            short_url
        })
        if(usesId){
            newURL.usesId = usesId
        }
    
        await newURL.save()
    } catch (error) {
        if(error.code == 11000){
            throw new ConflictError("Short URL already exits")
        }
        throw new Error(error)
    }
}

export const getUrl = async (short_url) =>{
    return urlSchema.findOneAndUpdate({short_url: short_url},{$inc:{clicks:1}});
}