# MERN-STACK-surveyform

*********************************************************************************************************************************************************************************************
Objective: Create a survey form submission application using the MERN stack that allows users to submit required information. Additionally, deploy the application online to a server.
**************************************************************************************************************************************************************************************

 deploy limk: https://mern-stack-surveyform.vercel.app/

************
Requriments:

1. Backend (Node.js, Express, MongoDB):

- Set up a Node.js and Express server.
- Use MongoDB to store survey form submissions.
- Implement RESTful API endpoints for handling surveys form submissions.
 
2. Frontend (React):
  
- Develop a React application to interact with the backend.
- Design a survey form with fields such as name, gender, nationality, email, phone number, address, and message.
- Implement form submission functionality, storing the data in the MongoDB database.
- Design a page to view the data from a list of previous survey form submissions.
- Allow admin to have a login access to view the data from a list of previous survey form submissions.

3. Deployment:

- Deploy the application online using a platform of your choice (e.g., Heroku, AWS, or any other).
- Provide clear instructions on how to access the deployed application.
  
4. User Interface:
  
- Design a user-friendly interface for the survey form.
- Provide feedback to users upon successful form submission.
- Use a responsive design to ensure usability on various devices.
  
**********************************************************************************************************************
Creating a survey form submission application using the MERN stack: 
*******************************************************************
  
 1. Set up the Development Environment:  

- Install Node.js and MongoDB: Ensure you have these prerequisites installed on your system.
- Create a project directory: Use a terminal to create a new directory for your project.
- Initialize npm: Run npm init -y within the directory to initialize an package.json file.
- Install dependencies: Install the essential packages:

- npm install express mongoose react react-dom body-parser


2. Create the Backend (Node.js, Express, MongoDB):

- Structure project: Create folders for models, controllers, and routes.
- Define Mongoose model: In models/Survey.js, create a Mongoose schema for survey responses
- Create controller: In controllers/surveys.js, create functions to handle survey submissions
- Define routes: In routes/surveys.js, set up routes to handle survey submissions
- Set up Express server: In app.js, create an Express server and integrate routes

3. Create the Frontend (React):
   
- Set up React app: Use create-react-app to initialize a React project within the project directory.
- Create survey form component: Design a React component for the survey form, handling user input and submission.
- Handle form submission: Use fetch or axios to send a POST request to the backend API with survey data.
- Display success message: Upon successful submission, display a success message to the user.

4. Integration and Testing:

- Run the server: Start the Node.js server using node app.js.
- Run the React app: Start the React development server using npm start in the React app directory.
- Test the application: Fill out the survey form and submit it to ensure data is saved in the database and the success message is displayed.

- 

