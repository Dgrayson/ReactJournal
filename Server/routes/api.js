const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient; 

const connectionString = require('./secret')

var db; 
var entriesCollection; 

MongoClient.connect(connectionString, (err, client) => {

  db = client.db('Journal'); 
  entriesCollection = db.collection('Entries');   

  console.log('Moongo connection*******successful'); 
}); 

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); 
})

router.get('/entries', function(req, res, next) {
  console.log("*                    *\n**                  **\n***                ***\n**** Getting Data ****\n***                ***\n**                  **\n*                    *"); 
  
  db.collection('Entries').find().toArray()
  .then(results => {
    console.log("Results are " + JSON.stringify(results));

    res.send(JSON.stringify(results))
  })
  .catch((error) => {
    console.log(error);
  }); 


});

router.post('/', function (req, res){

  console.log("*                    *\n**                  **\n***                ***\n****Sending Data****\n***                ***\n**                  **\n*                    *"); 

  entriesCollection.insertOne(req.body)
    .then(result => {
      console.log(result); 
    })
    .catch(error => console.error(error)); 
});

module.exports = router; 