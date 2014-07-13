var mongo = require('mongodb');
var SetupStrategy = require('./SetupStrategy.js');

var mongoClient = new mongo.MongoClient();

var MongoDBStrategy = function() {
    this.db = null;
    this.collection = null;
};

MongoDBStrategy.prototype = Object.create(SetupStrategy.prototype);

MongoDBStrategy.prototype.initialize = function(config, callback) {
    console.log('Initializing DB connection');

    // build mongo uri
    // ex: mongodb://demo_user:demo_password@ds027769.mongolab.com:27769/demo_database
    var mongoURI = 'mongodb://' + config.Username + ':' + config.Password + '@' + config.Server + ':' + config.Port + '/' + config.DBName;
    
    mongo.MongoClient.connect(mongoURI, function (err, database) {
        if (err) {
            throw err;
        }

        this.db = database;
        this.collection = db.collection(config.CollectionName);
        
        console.log('Connection Made');
        
        callback(err);
    });
};

MongoDBStrategy.prototype.dropDB = function() {
    console.log(this.db);
    console.log('in the mongo class');
};

module.exports = MongoDBStrategy;
