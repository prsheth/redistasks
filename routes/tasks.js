var express = require('express');
var router = express.Router();
var db=require('../database');

router.post('/add', function(req, res, next) {
    var task =req.body.addTask;
  db.addTask(task,function(text){
    console.log("Text",text);
    res.redirect('/');
  });
 
});

router.post('/delete', function(req, res, next) {
    var tasks =req.body.deleteTasks;
    db.deleteTasks(tasks,function(text){
        console.log("Text Delete",text);
        res.redirect('/');
    }); 
});

module.exports = router;
