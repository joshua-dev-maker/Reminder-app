const mongoose = require('mongoose')

const Reminder = mongoose.Schema;
const ReminderSchema = new Reminder({
   
    
    user: {
        type: String,
        require: true

    },
    description: {
        type: String,
        require: true

    },
    date: {
        type: Date,
        default: Date.now,
        immutable: true
    }
},
{timestamps:true});
const ReminderModel = mongoose.model('Reminder', ReminderSchema);
module.exports = ReminderModel;