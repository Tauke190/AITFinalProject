

# NYU User Experiment Recruitment platform


## Notes for Graders

[**Login Page**](https://nyulabexperiments.onrender.com/login)\
username : test1\
password : test1


[**1st Form**](https://nyulabexperiments.onrender.com/student/dashboard/register?title=Social%20Science%20Experiment)\
This form will actually put you as a registered user in the database for this particular experiment


[**2st Form**](https://nyulabexperiments.onrender.com/admin/dashboard)\
This is admin accessible form that will register a new experiments to be visible for the students .If you go to [**Student Dashboard**](https://nyulabexperiments.onrender.com/student/dashboard) , you can see the newly created experiment




Significant work was done on the frontend which is entirely made of react \
User authentication is also done with bcrpyt\
2 forms Integrated in user and Admin\
Significant work was done on setting up the database and designing Mongoose schema



## Overview
The User Experiments Recruiter platform is a platform designed to streamline the process of recruiting participants for user research and experimentation done by NYU Labs. This platform  helps to connect with individuals who match the specific demographic and behavioral criteria needed for a wide range of research projects. It offers a user-friendly interface that allows researchers to define their target audience, set recruitment criteria, and monitor the recruitment progress in real-time. With its ability to efficiently source diverse participants, the User Experiments Recruiter platform significantly enhances the speed and accuracy of user testing, making it an invaluable resource for researchers and social science experiments happening at NYU to obtain meaningful insights from their user experiments. It is also a platform where students can earn some money by participating in the experiment.


## Data Model

The application will store Users, Experiments, and Participants Info

* users can have multiple properties such as firstName, lastName, email, age, gender, location, and interests
* The experiment will have properties such as the title, description, criteria, hourly compensation, time commitment, etc
* Participants will have the embeddings of user schema and ExperimentSchema


```javascript
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: Number,
  gender: String,
  location: String,
  interests: [String],
});
```

```javascript
const ExperimentSchema = new mongoose.Schema({
  title: String,
  description: String,
  criteria: {
    age: { min: Number, max: Number },
    gender: [String],
    location: String,
    interests: [String],
  },
  Invasive : No,
  RequiresEquipments : Yes,
  Numberofparticipants : 30,
  HourlyRate : 20,
  startDate: Date,
  endDate: Date,
});
```

```javascript
const ParticipantSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  experiment: { type: mongoose.Schema.Types.ObjectId, ref: 'Experiment' },
});
```

## [Link to Commented First Draft Schema](db.mjs) 
db.mjs file

## Wireframes

(__TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)

-Login page for Admin/Experimental
![](https://github.com/nyu-csci-ua-0467-001-002-fall-2023/final-project-Tauke190/blob/master/documentation/Screen%20Shot%202023-11-01%20at%2017.54.50.png)

-Login page for Student/User
![](https://github.com/nyu-csci-ua-0467-001-002-fall-2023/final-project-Tauke190/blob/master/documentation/Screen%20Shot%202023-11-01%20at%2017.55.16.png)

-User/Student Dashboard for finding and registering for experiments
![list](https://github.com/nyu-csci-ua-0467-001-002-fall-2023/final-project-Tauke190/blob/master/documentation/Screen%20Shot%202023-11-01%20at%2018.06.54.png)

-Admin/Dashboard for publishing user experiment study to recruit participants
![](https://github.com/nyu-csci-ua-0467-001-002-fall-2023/final-project-Tauke190/blob/master/documentation/Screen%20Shot%202023-11-01%20at%2018.11.23.png)


## Site map
![](https://github.com/nyu-csci-ua-0467-001-002-fall-2023/final-project-Tauke190/blob/master/documentation/Screen%20Shot%202023-11-01%20at%2018.21.01.png)

## User Stories or Use Cases
* As an NYU Researcher,  I want to be able to define the criteria for my experiment.
* As an NYU Researcher,  I want to be able to recruit NYU students for my experiments efficiently
* As an experimenter, I want to easily create and manage new experiments on the platform, complete with experiment titles, descriptions, and recruitment criteria, to facilitate experimentation.
* As a researcher, I want to receive real-time updates and notifications on the progress of participant recruitment for my experiments, so that I can stay informed about the status of my projects.
* As a platform user, I want to efficiently find an experiment where I can earn some extra money.
* As a platform user, I want to filter the experiments based on time commitment and my department's interests.

## Research Topics
* (5 points) React : Using and learning react as a front-end framework
* (5 points) Integrate user authentication : I'm going to be using my passport for user authentication
* (2 points) : Use a CSS framework or UI toolkit
tailwind.css

## [Link to Initial Main Project File](app.mjs) 
App.mjs file

## Annotations / References Used
1. [passport.js authentication docs](http://passportjs.org/docs) 
2. [tutorial on React](https://legacy.reactjs.org/tutorial/tutorial.html) 

