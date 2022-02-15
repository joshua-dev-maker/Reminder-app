const Reminder = require('../model/Reminder.model');

exports.createReminder = async(req,res,next) => {
    try {
        const {_id,user, description,date} = req.body;
            if(!user || !description){
                throw "please fill this field"
        }
        
        // const newReminder= new Reminder({_id,user, description, date});
        //  await newReminder.save();
        // return res.status(201).json({
        //     success: true,
        //     newReminder,
        // })
         const newReminder = await Reminder.create({user, description, date});
        return res.status(201).json({
            newReminder,
        })
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            success: false,
            message: error.message,
        })
        
    }
}

exports.findReminder = async(req, res, next) => {
    try {
        const findReminder = await Reminder.find().sort();
        return res.status(200).json({
            sucess: true,
            findReminder
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            sucess: false,
            message: error.message,
        })
    }
}
exports.fetchById = async (req, res, next) => {
    try {
      const { _id } = req.query;
      const getOne = await Reminder.findOne({ _id});
      if (!getOne) {
        return res.status(404).json({
          message: "not found",
        });
      }
      return res.status(200).json({
        getOne,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  };
  
  exports.deleteById = async (req, res, next) => {
    try {
      const { _id } = req.params;
      const deleteOne = await Reminder.findByIdAndDelete({ _id});
      if (deleteOne) {
        return res.status(405).json({
          message: " deleting or modifying not allowed"
        });
      }
    //   return res.status(200).json({
    //     deleteOne,
    //   });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  };
  
  exports.updateOne = async (req, res, next) => {
    try {
      const { _id } = req.params;
      const updateOne = await Reminder.findOneAndUpdate({ _id});
      if (updateOne) {
        return res.status(405).json({
          message: "deleting or modifying not allowed",
        });
      }
      return res.status(200).json({
        updateOne,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  };
  
  exports.updateMore = async (req, res, next) => {
    try {
      const { _id } = req.params;
      const updateput = await Reminder.findByIdAndUpdate({ _id});
      if (updateput) {
        return res.status(405).json({
          message: "deleting or modifying not allowed",
        });
      }
      return res.status(200).json({
        updateput,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  };
  