import mongoose from 'mongoose';


const ExperimentSchema = new mongoose.Schema({
    title: String,
    description: String,
    HourlyRate : String,
    TimeRequired : String,
    CurrentStatus : String,
    registeredUsers : [{
      username : String,
      name : String,
      email: String,
      date: String,
      time : String
    }],
  });


const ExperimentModel = mongoose.model('Experiment', ExperimentSchema);

export default ExperimentModel;