const fileUsersJSON = require('./public/users.json')
const fileMessagesJSON = require('./public/messages.json')
const fileChatsJSON = require('./public/chats.json')
const fileDbJSON = require('./public/db.json')


// const express = require("express");
// const cors = require('cors')
// const app = express();

// const PORT = 8080;

// app.use(cors());

// app.use('/login', (req, res) => {
//   res.send(JSON.stringify(fileUsersJSON));
// });

// app.use('/messages', (req, res) => {
//   res.send(JSON.stringify(fileMessagesJSON));
// });

// app.use('/chat', (req, res) => {
//   res.send(JSON.stringify(fileChatsJSON));
// });

// app.listen(PORT, () => console.log('API is running on http://localhost:8080/login, http://localhost:8080/messages, http://localhost:8080/chat'));

const jsonServer = require('json-server') //1
const server = jsonServer.create()//2
const router = jsonServer.router(fileDbJSON)//3
// router.db._.id = 'employeeid';//3a
const middlewares = jsonServer.defaults()//4 
server.use(middlewares) //5


// To handle POST, PUT and PATCH 
// you need to use a body-parser. Using JSON Server's bodyParser
// server.use(jsonServer.bodyParser);

//6 Redirect URL's- 
// Have all URLS with customurl redirected 
// Have all URLS prefixed with a /api
// Add this before server.use(router)
server.use(jsonServer.rewriter({
'/customurl/*': '/$1'
}))
//7 Ensure every POST has a createdAt date
/*server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});
//8 Ensure every POST of an employee, it has lname for sure. Otherwise return 400 and a message
server.post("/employees/", function(req, res, next) {
  const error = validateRequest(req.body);
  if (error) {
    res.status(400).send(error);
  } else {                    
    next();
  }
});*/
server.use(router) 
server.listen(8080, () => {//10 using 5000 port
  console.log('JSON Server is running')
})
function validateRequest(employee){
//9 validate function used by POST above
    if (!employee.lname) return "lname is required.";
}