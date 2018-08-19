var express = require('express');
var router = express.Router();
var db=require('../database');
/* GET home page. */
router.get('/', function(req, res, next) {
  db.displayTask(function(tasks){
    res.render('index', { title: 'Task List' , tasks:tasks});
  });
 
});

module.exports = router;
