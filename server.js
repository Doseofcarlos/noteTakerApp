//dependencies
const express = require("express");

//Server 
const app = express();

// Port
const PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// route
//app.use(require("./routes/htmlRoute"));
//app.use(require("./routes/apiRoute"));

// Listen
app.listen(PORT,()=>{
    console.log(`Server started on http:localhost:${PORT}`);
}) 