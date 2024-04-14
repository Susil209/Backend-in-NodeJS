import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectdb = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("DB connection established, DB host: " + connectionInstance.connection.host);
        // console.log(connectionInstance);
    } catch (error) {
        console.error("Mongodb connection failed :",error);
        process.exit(1);
    }
}

export default connectdb;