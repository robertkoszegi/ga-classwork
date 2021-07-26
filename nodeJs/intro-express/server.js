 //This can be started form a boiler plate
 
 
 // Load express
 const express = require('express');
 const path = require('path');
 const todoDb = require("./data/todo-db")


 // Create our express app
 const app = express();
 



app.set("view engine", "ejs")
app.set("views", path.join(__dirname, 'views'));

 // Define a "root" route directly on app
 // Tomorrow, we'll use best practice routing
 app.get('/', function (req, res) {
   res.send('<h1>Hello!</h1>');
 });
 
 app.get('/home', function (req, res) {
   res.render("home");
 });
 
 //Todo list
 app.get('/todos', function(req, res) {
  res.render('todos/index', {
    todos: todoDb.getAll()
  });
});

 // Tell the app to listen on port 3000
 // for HTTP requests from clients
 app.listen(3000, function () {
   console.log('Listening on port 3000');
 });


 // Basic structure:

//   // Require modules
//   const express = require('express');
 	
//   // Create the Express app
//   const app = express();
      
//   // Configure the app (app.set)
      
      
//   // Mount middleware (app.use)
      
      
//   // Mount routes
  
      
//   // Tell the app to listen on port 3000
//   app.listen(3000, function() {
//     console.log('Listening on port 3000');
//   });