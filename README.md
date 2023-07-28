# Twitter_clone
# Overview 📹

Seeking a talented Backend Developer with expertise in Node.js, Express.js, JavaScript, and MongoDB to power our exciting Twitter clone application. Build robust APIs, ensure secure data handling, and optimize performance for a seamless user experience. Collaborate with cross-functional teams and deliver high-quality solutions to meet project goals. Join us in creating an innovative and scalable backend for our dynamic social platform. Let's shape the future of communication together! #NodeJS #ExpressJS #JavaScript #MongoDB #BackendDeveloper #TwitterClone

# Features
1.Auth (Sign in/Sign up/Log out)
2.Show list of user
3.Create New tweet
4.Update tweet
5.Delete tweet
6.Read tweet
7.Read tweet by id
8.Follow / Unfollow
9.Delete tweet

# Start the app locally 🔌
First please clone this repository
git clone https://github.com/A007-cloud/twitter_clone/tree/main.git

# Environment setup
First create .env file to server folder
cd twitter_clone

touch .env

Add these variables down below to .env file and set them as you want.

PORT = XXXX
TOKEN_SECRET = 'XXXXXX'
# Database 📥
If you don't have mongoDB installed on your local machine then create a MongoDB Atlas cluster and add the link to your .env file.

MONGODB_URI = mongodb+srv://XXXXXXXXX:XXXX@cluster0.93mxd.mongodb.net/?retryWrites=true&w=majority 
if you don't have mongodb installed.
# Server 🔧
Go server folder and install the requirements and start the server. You can check the endpoints located on client/src/api/urls

cd twitter_clone

npm install

npm start

# Client 👨🏼‍💻
Go client folder and install the requirements and start the client app.

cd twitter_clone

npm install

npm start

# Done 🥳
App is ready to go. Check the localhost with the port that you set for PORT in .env file.

# Contributing 🙌
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
# License
MIT
