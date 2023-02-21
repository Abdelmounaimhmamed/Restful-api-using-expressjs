const express = require("express"); //to  bring the express . 
const Port = process.env.PORT || 5000; // we should look first to the environment varibale and if dont find any PORT var then use 5000 port
const app = express(); // initialze express 
const path = require("path"); // a nodejs integrated module that helps to have access to the path to the  each file 



// evry route we created gonna look to the response and request object 
// to access this empty  / route we use the req to send a demand to it and then we will have a response from this server in order to display to us some kind of info  
app.get("/" , (req,res) => {
    res.write("hello !");
})
// app.get("/" , (req,res) => {
//     // res.send("hello !");
//     // res.sendFile(path.join(__dirname,"public","index.html"));
// })



app.listen(Port , () => {
    console.log(`App running on Port ${Port}`)
})
// the listen method takes a two arguments port number and a call back function that run when the app listen on the port .  