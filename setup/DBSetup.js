var DBSetup = function(config, strategy) {
    this.config = config;
    this.strategy = strategy;
};

DBSetup.prototype.initialize = function(callback) {
    return this.strategy.initialize(this.config, callback);
};

DBSetup.prototype.dropDB = function(callback) {
    return this.strategy.dropDB(callback);
};

DBSetup.prototype.createTables = function(callback) {
    return this.strategy.createTables(callback);
};

DBSetup.prototype.importData = function() {
    return this.strategy.importData();
};

DBSetup.prototype.addIndexes = function() {
    return this.strategy.addIndexes();
};

module.exports = DBSetup;
