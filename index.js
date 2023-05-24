require("dotenv").config();
const connectDb = require('./connect/connectDB');
connectDb();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const eventRoute = require("./routes/eventRoute");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: ["http://localhost:3000", ],
    credentials: true,
  })
)


// Routes
app.use("/api/v3/app", eventRoute);

const port = process.env.PORT || 9000;
app.listen(port , (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`Server running at port ${port}`);
    }
});
