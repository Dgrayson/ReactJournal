var express = require('express');
var router = express.Router();
const mysql = require('mysql'); 
const connection = mysql.createConnection({
  host: 'localhost', 
  user:'root', 
  password:'root', 
  database: 'reactjournal'
}); 

connection.connect(function(err){
  console.log('connection*******successful'); 
}); 

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); 
})

router.get('/', function(req, res, next) {
    //res.json([{id: 1, title: 'Hello World'}, {id: 2, title: 'Goodbye world'}]); 

    console.log("Getting data"); 

    connection.query('SELECT * FROM entries', function (err, rows, fields){
  
        if(err)
          console.log(err); 
      

          console.log(rows); 
          
          var string = JSON.stringify(rows); 
          var json = JSON.parse(string); 
          res.json(json); 
          res.end(); 
      });
});

module.exports = router; 