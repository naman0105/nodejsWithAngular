var express = require('express');
var router = express.Router();
var cors = require('cors')

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://icart:finalyear@icartcluster-sbbe8.gcp.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });


router.use(cors())

var products = [
{
	_id : 1,
	name : "pepsi",
	price : 35,
	discount : 10,
	location : {
		2 : [3,1],
		3 : [2,4],
		4 : [3,5],
		5 : [4,6],
		6 : [1,5]
	}
},
{
	_id : 2,
	name : "coca cola",
	price : 35,
	discount : 8,
	location : {
		1 : [2,6],
		3 : [2,4],
		4 : [3,5],
		5 : [4,6],
		6 : [1,5]
	}
}
]


//code i use to remove everything from a collection 
// client.connect(err => {
// 	const collection = client.db("iCartSystem").collection("Products");
//  // perform actions on the collection object
// 	collection.remove();  
// });


/* GET home page. */
router.get('/', function(req, res, next) {
	client.connect(err => {
	  const collection = client.db("test").collection("devices");
	 // perform actions on the collection object
	  // console.log(collection);
	  collection.insertOne({name : "naman bansal"}, function(err, result){
	  	if(err) throw err;
	  	console.log("one document inserted");
	    // client.close();
	    res.render('index', { title: 'Express' });	    
	  })	  
	});
});

router.get('/fromdatabase', function(req, res, next) {
	client.connect(err => {
	  const collection = client.db("test").collection("devices");
	 // perform actions on the collection object
	  collection.find({}).toArray(function(err, result){
	  	if(err) throw err;
	  	console.log(result);
	  	// client.close();
		res.render('index', { title: result });		
	  })	  
	});
});


router.get('/insertDummyData', function(req, res, next) {
	client.connect(err => {
	  const collection = client.db("iCartSystem").collection("Products");
	 // perform actions on the collection object
	  collection.insert(products, function(err, result){
	  	if(err) throw err;
	  	console.log(result);
	  	// client.close();
		res.render('index', { title: result });		
	  })	  
	});
});


router.get('/products', function(req, res, next) {
	client.connect(err => {
	  const collection = client.db("iCartSystem").collection("Products");
	 // perform actions on the collection object
	  collection.find({}).toArray(function(err, result){
	  	if(err) throw err;
	  	console.log(result);
	  	// client.close();
	  	res.send(result);
		res.render('index', { title: result });		
	  })	  
	});
});


module.exports = router;
