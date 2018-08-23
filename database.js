/////////////////////////////DB CONNECTION //////////////////////////////
var redis= require('redis');
var config=require('./config');
var client=redis.createClient(config);
client.on('connect',function(){  console.log( 'Redis Db connected..');});

exports.displayTask =function(cb){
    var output={};
     client.lrange('tasks',0,-1,function(err,tasks){
        output.tasks=tasks;
        cb(output);
     });
};

exports.displayEvents=function(cb){
    client.hgetall('event',function(err,events){
        cb(events);
    });
};

exports.addTask=function(task,cb){
    client.rpush('tasks',task,function(err,reply){
        if(!err){
            cb(reply);
        }else{
            cb(err);
        }
    });
};

exports.deleteTasks=function(tasks,cb){
    client.lrange('tasks',0, -1 , function(err,tasklist){
        for(var i=0;i<tasklist.length;i++){
            if(tasks.indexOf(tasklist[i])> -1){
                client.lrem('tasks',0,tasklist[i],function(){
                    if(err){
                        cb(err);
                    }else{
                      // wait for the list to get done and then cb after loop
                    }
                });
            }
        }
        cb();
    });
};

exports.createEvent=function(newEvent,cb){
    client.hmset('event',['what',newEvent.what,'when',newEvent.when,'where',newEvent.where],function(err,reply){
        if(!err){
            cb(reply);
        }else{
            console.log('Error from Hash', err);
            cb();
        }
    });
}