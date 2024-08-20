import mongoose from "mongoose";


export const connectToMongoDB = async () => {
    try {
        const connected = await mongoose.connect(process.env.MONGODB_URI);

        if (!connected) {
            console.log("Connection Failed : Check your MONGODB_URI");
        }
    } catch (error) {
        throw new Error("Failed to Connect to Mongodb :", error)
    }
}