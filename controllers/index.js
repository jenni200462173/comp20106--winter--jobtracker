var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Job Tracker' });
});

module.exports = router;


/* GET about page */
router.get('/about',(req,res) => {
    // load the about .hbs view
    res.render('about', {title:'About'});
});

module.exports = router;