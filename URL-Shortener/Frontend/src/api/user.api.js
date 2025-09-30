import axios from "axios"
import axiosInstance from "../utils/axiosInstance"

export const loginUser = async (email, password) => {
    try {
        const { data } = await axiosInstance.post("/auth/login", { email, password })
        return data
    } catch (err) {
        throw new Error(err.response?.data?.message || "Failed to Login")
    }
}

export const registerUser = async (name, email, password) => {
    try {
        const { data } = await axiosInstance.post("/auth/registor", { name, email, password })
        return data
    } catch (err) {
        throw new Error(err.response?.data?.message || "Failed to Registor")
    }
}

export const logoutUser = async (email, password) => {
    try {
        const { data } = await axiosInstance.get("/auth/logout", { email, password })
        return data
    } catch (err) {
        throw new Error(err.response?.data?.message || "Failed to logout")
    }
}

export const getCurrentUser = async () => {
    try {
        const { data } = await axiosInstance.get("/auth/me")
        return data
    } catch (err) {
        throw new Error(err.response?.data?.message || "session timeout")
    }
}

export const getAllUserUrls = async () => {
    try {
        const { data } = await axiosInstance.post("/user/urls")
        return data
    } catch (err) {
        throw new Error(err.response?.data?.message || "Empty url list")
    }
}