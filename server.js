const express = require('express'); //from documentation: express is function
const app = express();//app is an object
const methodOverride = require('method-override');
const cors = require('cors');
const APP = 'Tracker BE App:'

const Location = require('./models').Location;


app.use(methodOverride("_method"));
app.use(express.json());
app.use("/vehicle/info", require("./controllers/vehicleController.js"));
app.use("/vehicle/location", require("./controllers/locationController.js"));
app.use(cors() );

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.listen(3000, ()=>{
    console.log(`${APP} listening`);
});