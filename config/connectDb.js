import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connection established");
    } catch(error) {
        console.error("Db connection error");
    }
}

export default connectDB;