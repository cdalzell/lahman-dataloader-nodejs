var DBSetup = function(strategy) {
    this.strategy = strategy;
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
