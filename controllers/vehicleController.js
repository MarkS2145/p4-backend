const express = require('express');
const router = express.Router();
const Vehicle = require('../models').Vehicle;

// using route: /vehicle/info

router.get('', (req, res) => {
    Vehicle.findByPk(req.query.id).then( (response) =>{
        console.log(`GET Vehicle/info from db:`, {response})
        res.json(response)
    });
});

router.post('', (req, res) => {
    const vehicle = Vehicle.create({
        vehicle_name: req.query.vehicle_name,
        img_url: req.query.img_url,
        driver_name: req.query.driver_name,
        phone_number: req.query.phone_number
    }).then( (response) =>{
        console.log(`POST Vehicle/info from db:`, {response})
        res.json(response)
    });
});

router.put('', (req, res) => {
    const vehicle = Vehicle.update({
        vehicle_name: req.query.vehicle_name,
        img_url: req.query.img_url,
        driver_name: req.query.driver_name,
        phone_number: req.query.phone_number
    },{
        where: {
            id: req.query.id
        }
    }).then( (response) =>{
        // json(response) returns 1 if successful, else 0
        console.log(`PUT Vehicle/info from db:`, {response})
        res.json(response)
    });
});

module.exports = router;