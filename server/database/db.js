import mongoose from "mongoose"

const Connection = async(DB_URL) => {
    try {
        await mongoose.connect(DB_URL, {});
        console.log('Database connected successfully');
    } catch(error) {
        console.log("error while connecting to database ",error.message);
    }
}

export default Connection;