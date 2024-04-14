// require('dotenv').config()

import dotenv from 'dotenv';
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import express from "express";
import connectdb from './db/connection.js';

dotenv.config({
    path: './env'
})

const app = express();

connectdb();











// connect to db (IIFE)
/*(async() => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("DB connection established");

        app.on('error', error => {
            console.log("Error connecting app: ",error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error :",error);
        throw error;
    }
})()
*/