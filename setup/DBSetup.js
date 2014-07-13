var DBSetup = function(config, strategy) {
    this.config = config;
    this.strategy = strategy;
};

DBSetup.prototype.initialize = function(callback) {
    return this.strategy.initialize(this.config, callback);
};

DBSetup.prototype.dropDB = function() {
    return this.strategy.dropDB();
};

DBSetup.prototype.createTables = function() {
    return this.strategy.createTables();
};

DBSetup.prototype.importData = function() {
    return this.strategy.importData();
};

DBSetup.prototype.addIndexes = function() {
    return this.strategy.addIndexes();
};

module.exports = DBSetup;
