var express = require('express');
var app = express();

// ----Initialization----
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/CYOMT";

app.get('/',function(req,res){
    res.send("working...")
});
let optionMongoDB = { useUnifiedTopology: true };

// --api for getting main category

app.post('/getMainCategory',function(req,res){
    MongoClient.connect(url,optionMongoDB, function(err, client) {
        if (err) throw err; 
        var db = client.db('CYMOT');
        var element = db.collection('main_category').find({});
        element.then(function(result)=>{
            if (error) throw error;
            console.log(result);
            res.send('result');
            client.close();
        });
        
        
      });
});
app.listen(3000,function(){
    console.log('node server running on port 3000');
});