var SetupStrategy = function(config) {
    this.config = config;
};

SetupStrategy.prototype.initialize = function() {
    throw new Error('SetupStrategy#initialize needs to be overridden.');
};

SetupStrategy.prototype.dropDB = function() {
    throw new Error('SetupStrategy#dropDB needs to be overridden.');
};

SetupStrategy.prototype.createTables = function() {
    throw new Error('SetupStrategy#createTables needs to be overridden.');
};

SetupStrategy.prototype.importData = function() {
    throw new Error('SetupStrategy#importData needs to be overridden.');
};

SetupStrategy.prototype.addIndexes = function() {
    throw new Error('SetupStrategy#addIndexes needs to be overridden.');
};

module.exports = SetupStrategy;
