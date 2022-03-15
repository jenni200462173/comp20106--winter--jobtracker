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

/*POST/*/
router.post('/create',(req,res) => {
    //use our Mongoose model to create a new employer fro the submitter form body
    Employer.create(req.body, (err,employer) => {
        if (err){
            console.log(err)
        }
        else{
            res.redirect('/employers')
        }
    })

})

/*GET/ employers/delete/abc123 => delete employer with ID found in url parameter */
router.get('/delete/:_id', (req,res) => {
    Employer.remove({_id: req.params_id}, (err) => {
        if(err){
            console.log(err)
        }
        else{
            res.redirect('/employers')
        }
    })
})
/*GET/ employers/edit/abc123 => show edit from populated with values of selected employer document from url parameter*/ 
router.get('/edit/:_id', (req, res) => {
    Employer.findById(req.params._id,(err, employer) =>{
        if (err){
            console.log(err)
        }
        else{
            res.render('employers/edit', {
                title: 'Employer Details',
                employer: employer
            })
        }
    })
})
/*POST / employers/edit/abc123 => update document in mongodb & redirect to index*/
router.post('/edit/:_id',(req,res) => {
    Employer.findByIdAndUpdate({ _id: req.params._id }, req.body, null,(err, employer ) => {
        if(err) {
            console.log(err)
        }
        else{
            res.redirect('/employers')
        }
    })
})
// express this file so it is public
module.exports = router 