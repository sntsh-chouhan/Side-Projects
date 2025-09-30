import axios from "axios"
import axiosInstance from "../utils/axiosInstance"

export const createShortUrl = async (url,slug) =>{
  try {
    const {data} = await axiosInstance.post("/api/create",{url,slug})
    console.log("daya", data.shortUrl)
    return data.shortUrl
  } catch (err) {
    throw new Error(err.response?.data?.message || "Failed to create short URL")
  }
}
