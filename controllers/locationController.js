const express = require('express');
const router = express.Router();
const Location = require('../models').Location;

const TEST_LAT = "32.66666"
const TEST_LON = "-118.12666"

// using route: /vehicle/location

router.get('', (req, res) => {
        Location.findByPk(req.query.id)
        .then( (response) =>{
            console.log(`GET Vehicle/location from db:`, {response})
            res.json(response)
        });
});

router.post('', (req, res) => {
    const vehicle = Location.create({
                lat: req.query.lat,
                lon: req.query.lon,
                vehcile_fk: req.query.id,
                
            }).then( (response) =>{
                console.log(`POST Vehicle/location from db:`, {response})
                res.json(response)
            });
});

router.put('', (req, res) => {
    const vehicle = Location.update({
                lat: req.query.lat,
                lon: req.query.lon,
            },{
                where: {
                    vehicle_fk: req.query.id
                }
            }).then( (response) =>{
                // json(response) returns 1 if successful, else 0
                console.log(`PUT Vehicle/location from db:`, {response})
                res.json(response)
            });
});



module.exports = router;