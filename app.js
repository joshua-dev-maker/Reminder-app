const express = require('express');

const mongoose = require('mongoose');

const nodemon = require('nodemon');
const ReminderRouter = require('./routes/Reminder.route')
require("dotenv").config();

const app = express();
const PORT= 1759

app.use(express.json())

const connectDB = async ()=> {
    try {
        await mongoose.connect(
            process.env.mongoose_URI,
                    // {
                    //     useNewUrlParser: true,
                    //     useUnifiedTopology: true,
                    // }
                )
        console.log("connected!!");
    } catch (error) {
        console.log(error)
        console.log('oops no data')
    }
}

connectDB();


app.use("/api/v1", ReminderRouter);

app.listen (PORT, ()=> {
   console.log(`Listening on port ${PORT}`);
})