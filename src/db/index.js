import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const constDB = async ()=>{
    try {
        const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Database connected successfully!! DB host:${connectionInstance.connection.host}`)

    }catch (error) {
        console.error("Error:", error);
    }
}

export default constDB;