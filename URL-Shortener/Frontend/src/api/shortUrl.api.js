import axios from "axios"
import axiosInstance from "../utils/axiosInstance"

export const createShortUrl = async (url) => {
  try {
    const { data } = await axiosInstance.post("/api/create", { url })
    console.log(data.short_url)
    return "http://localhost:3000/" + data.short_url
  } catch (err) {
    throw new Error(err.response?.data?.message || "Failed to create short URL")
  }
}
