import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

try{
    const constDB= async () =>{
       const connectionInstnce= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`Database connected successfully!! DB host: ${connectionInstnce.connection.host}`);
    }
}catch(error){
    console.error("Error while connecting to database", error);
}

export default constDB;