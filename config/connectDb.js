import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://valo:valomongodb@cluster0.vh6n0bg.mongodb.net/cda');
        console.log("DB Connection established");
    } catch(error) {
        console.error("Db connection error");
    }
}

export default connectDB;