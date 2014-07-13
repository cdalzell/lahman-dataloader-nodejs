var mongo = require('mongodb');
var SetupStrategy = require('./SetupStrategy.js');

var MongoDBStrategy = function() {};

MongoDBStrategy.prototype = Object.create(SetupStrategy.prototype);

MongoDBStrategy.prototype.dropDB = function() {
    console.log('in the mongo class');
};

module.exports = MongoDBStrategy;
