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
  //res.json([{id: 1, Title: 'Hello World'}, {id: 2, Title: 'Goodbye world'}]); 

  console.log("Getting data"); 

  connection.query('Select * from entries', function (err, rows, fields){
        if(err)
          console.log(err); 
      
          console.log(rows); 
          
          var string = JSON.stringify(rows); 
          var json = JSON.parse(string); 
          res.json(json); 
          res.end(); 
      });
});

router.post('/', function (req, res){

  console.log("*                    *\n**                  **\n***                ***\n****Recieving Data****\n***                ***\n**                  **\n*                    *"); 
  var sql = 'INSERT INTO entries (title, EntryText) VALUES (?, ?)';

  console.log(req.body); 
  const newEntry = {
    title: req.body.entry.title,
    Entrytext: req.body.entry.Entrytext, 
  }

  connection.query(sql, [newEntry.title, newEntry.Entrytext], function(err, result){
    if (err) throw err; 

    console.log("*                    *\n**                  **\n***                ***\n****Insert success****\n***                ***\n**                  **\n*                    *"); 
  });
});

module.exports = router; 