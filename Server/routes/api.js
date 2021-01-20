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

router.get('/', function(req, res, next) {
    res.json({Title: 'Helow', Descirption: 'Hello World'}); 

    console.log("hello world"); 

    connection.query('SELECT * FROM entries', function (err, rows, fields){
  
        if(err)
          console.log(err); 
      
        console.log(rows); 
      }); 
});

module.exports = router; 