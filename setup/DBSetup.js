var DBSetup = function(config, strategy) {
    this.config = config;
    this.strategy = strategy;
    
    this.initialize();
};

DBSetup.prototype.initialize = function() {
    return this.strategy.initialize(this.config);
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
