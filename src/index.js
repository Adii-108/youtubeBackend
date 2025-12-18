import constDB from "./db/index.js"
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
});


constDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port: ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.error("Mongo db connection error failed !!!", error);
})









/*import express from "express"
const app = express();

(async()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error) =>{
            console.error("Error:", error);
            throw error;
        })
        app.listen(process.env.Port, () =>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error:", error);
    }
})()
*/