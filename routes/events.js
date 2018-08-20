var express = require('express');
var router = express.Router();
var db=require('../database');

router.post('/add', function(req, res, next) {
    var event ={};
    event.what= req.body.what;
    event.when=req.body.when;
    event.where=req.body.where;
    db.createEvent(event,function(text){
    console.log("Text",text);
    res.redirect('/');
    });
});

module.exports = router;