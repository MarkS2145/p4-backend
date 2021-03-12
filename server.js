const express = require('express'); //from documentation: express is function
const app = express();//app is an object

app.use("/vehicle", require("./controllers/vehicleController.js"));
app.use("/vehicle/location", require("./controllers/locationController.js"));

const APP = 'Tracker BE App:'


app.listen(3000, ()=>{
    console.log(`${APP} listening`);
});