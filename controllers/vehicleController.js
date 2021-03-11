const express = require('express');
const router = express.Router();

const APP = 'Tracker BE App:'
const TEST_LAT = "32.66666"
const TEST_LON = "-118.12666"

router.get('/info', (req, res) => {
    res.send(`${APP} Vehicle ${req.query.id} info:`);
});

router.post('/info', (req, res) => {
    res.send(`${APP} New vehicle created 
    Vehicle name: ${req.query.vehicle_name}, image: ${req.query.img_url}
    Driver name: ${req.query.driver_name}, contact: ${req.query.phone_number}`);
});

router.get('/location', (req, res) => {
    console.log(req.query);
    res.send(`${APP} Vehicle ${req.query.id} current position is, Lat: ${TEST_LAT}, Lon: ${TEST_LON}`);
});

router.post('/location', (req, res) => {
    console.log(req.query);
    res.send(`${APP} Vehicle ${req.query.id} position updated,Lat: ${req.query.lat}, Lon: ${req.query.lon}`);
});

router.put('/location', (req, res) => {
    console.log(req.query);
    res.send(`${APP} Vehicle ${req.query.id} position updated, Lat: ${req.query.lat}, Lon: ${req.query.lon}`);
});



module.exports = router;