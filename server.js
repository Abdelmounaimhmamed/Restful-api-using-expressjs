const express = require("express"); 
const Port = process.env.PORT || 5000; 
const path = require("path");
const members = require("./members.js");
const {logger} = require("./middleware.js");
const routes = require("./routes/api/routes.js");

const app = express();

// in order to handle json data we should use a middleware called express.json()
app.use(express.json());
// for form submisssion : to handle url encoded data . 
app.use(express.urlencoded({extended : false}));
// this is a middleware 
app.use(logger);

// set a static folder : 
app.use(express.static(path.join(__dirname , "public")));
app.use("/" ,routes);



app.listen(Port , () => {
    console.log(`App running on Port ${Port}`)
})
