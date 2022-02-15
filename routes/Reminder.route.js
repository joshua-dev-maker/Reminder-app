const express = require('express')

const Reminder = require('../controller/Reminder.controller')
const router = express.Router();

router.post('/Reminder',Reminder.createReminder)
router.get('/findReminder',Reminder.findReminder)
router.get('/getOneReminder', Reminder.fetchById)
router.delete('/removeReminder/:_id', Reminder.deleteById);
router.patch('/updateOneReminder/:_id', Reminder.updateOne);
router.put('/updateReminder/:_id', Reminder.updateMore);

module.exports = router;