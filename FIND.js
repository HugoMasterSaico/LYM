
var ageArgument = +process.argv[2];

var mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;

mongoClient.connect("mongodb://127.0.0.1:27017/learnyoumongo",
function(err, db){
    
    if(err){
        console.log("> Error al conectarse a: "+
        'mongodb://127.0.0.1:27017/learnyoumongo');
        throw err;
    }
   
    var parrotsCollection = db.collection('parrots');
    
    var objetoResultado = parrotsCollection.find({
        age : {$gt : ageArgument}
    });
   
    objetoResultado.toArray(function(err, docs){
        console.log(docs);
       //FINALIZAMOS CONEXION
        db.close();
    });
});