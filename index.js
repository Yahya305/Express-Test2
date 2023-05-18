const  connectMongo= require("./db")
const express = require('express')
const cors = require('cors')
const app = express()
require("dotenv").config({ path: "./.env.local" })
const port = process.env.PORT || 5000

const CORS_URL=process.env.CORS_URL
const allowedOrigins = [CORS_URL];
const corsOptions = {
  origin: function (origin, callback) {
    // check if the origin is allowed
    if (!origin) {
      // if no origin provided, allow the request
      return callback(null, true);
    }
    if (allowedOrigins.indexOf(origin) === -1) {
      // if the origin is not allowed, reject the request
      return callback(new Error('Not allowed by CORS'));
    }
    // if the origin is allowed, allow the request
    return callback(null, true);
  }
};
app.use(cors(corsOptions));
connectMongo();
app.use(express.json());



app.use('/',(req,res)=>{
    res.json({message:"Hello Testing Express JS App"})
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})