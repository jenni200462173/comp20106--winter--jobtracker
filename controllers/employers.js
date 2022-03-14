// import express and create an express router in this ocntroller to dispatch HTTP requests
const express = require('express');
const employer = require('../models/employer');
const router = express.Router();
// import Employer model for CRUD opperations
const Employer = require('../models/employer')

/* GET root of employers */
router.get('/', (req,res) => {
    // use the mongoose model to query the list of employers in Mongodb
    Employer.find((err, employers) => {
        if(err){
            console.log(err)
        }
        else{
            res.render('employers/index',{
                title:'Employers',
                employers: employers

            })
        }
    })
})

/* GET/ employers/create => load empty employer form */
router.get('/create',(req,res) =>{
    res.render('employers/create',{
        title: 'Employer Details'
    })
})


// express this file so it is public
module.exports = router 