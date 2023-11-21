import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import session from 'express-session';
import bodyParser from 'body-parser'
import "./env-config.mjs";
import db from "./database/db.mjs";
import Experiment from './models/Experiment.mjs';
import User from './models/User.mjs';
import cors from "cors";
import bcrypt from "bcrypt";


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const users = [];

const sessionOptions = {
    secret: 'secret cookie thang (store this elsewhere!)',
    resave: true,
      saveUninitialized: true
};
app.use(session(sessionOptions));

app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/student/experiments',async (req,res)=>{

  const results = await Experiment.find({});
  console.log(results);
  res.json(results);
})

app.post('/api/admin/postexperiment', async (req,res)=>{

  const newtitle = req.body.title;
  const newdescription = req.body.description;
  const newHourlyrate = req.body.Hourlyrate;
  const newTimeRequired = req.body.TimeRequired;
  const newCurrentStatus = req.body.CurrentStatus;

  console.log(newtitle,newdescription,newHourlyrate,newTimeRequired,newCurrentStatus);

  const newExperiment = new Experiment({
    title : newtitle,
    description : newdescription,
    HourlyRate : newHourlyrate,
    TimeRequired : newTimeRequired,
    CurrentStatus : "Open",
  })

  newExperiment.save()
  .then((result) => {
    console.log('Experiment saved:', result);
    res.json(newExperiment);
  })
  .catch((error) => {
    console.error('Error saving Experiment:', error);
  });
  res.redirect("http://localhost:3000/admin/dashboard");
})



app.get('/users', async (req,res) => {

  const results = await User.find({});
  res.send(results);
});

app.post('/user/register', async (req,res)=> {

  const hashedPassword = await bcrypt.hash("test",10);
  const newUser = new User({
    firstName: "test",
    lastName: "test",
    passWord : hashedPassword,
  });

  newUser.save()
  .then((result) => {
    console.log('User registered:', result);
    res.status(201).send();
  })
  .catch((error) => {
    console.error('Error registering User:', error);
    res.status(500).send();
  });

});

app.post('/user/login', async (req,res)=> {

  const user = await Experiment.findOne({title : "Lado"});

  console.log(user);
  
  if(user == null){
    return res.status(400).send('Cannot find user');
  }
  try{
    if( await bcrypt.compare(req.body.passWord , user.passWord)){
      res.send("Correct");
    }
    else
    {
      res.send("Incorrect")
    }
  } catch (err)
  {
    console.log(err);
    res.status(500).send();
  }
});

app.post('/user/experiment/register', async (req,res)=> {

  const experiment = await Experiment.findOne({title : req.body.experiment});

  console.log(experiment);

  const registeredUser = {
    name : req.body.name,
    email : req.body.email,
    date : req.body.date,
    time : req.body.time,
  }
  experiment.registeredUsers.push(registeredUser);

  const result = await experiment.save();
});



app.listen(process.env.BACKEND_PORT);