var express = require('express');
var router = express.Router();
var db=require('../database');
/* GET home page. */
router.get('/', function(req, res, next) {
  db.displayTask(function(output){
    console.log(output);
    res.render('index', { title: 'Task & Events List' , tasks:output.tasks, events:output.events});
  });
 
});

module.exports = router;
