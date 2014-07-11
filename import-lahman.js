var async = require('async'); // https://github.com/caolan/async
var fs = require('fs');
var minimist = require('minimist'); // https://www.npmjs.org/package/minimist
var path = require('path');
var prompt = require('prompt'); // https://github.com/flatiron/prompt

/** Process Command Line Parameters */
var argv = minimist(process.argv.slice(2));

var dataDir = __dirname + '/data/';
console.log(dataDir);
//console.dir(argv);

async.waterfall([
    /** Confirm DB Drop */
    function promptDBDrop(callback) {
        var schema = {
            name : "confirmDrop",
            description : "WARNING! Continuing further with this script will drop your current DB. Do you wish to proceed? [yN]",
            type : "string",
            default : "N",
            pattern : /^[ynYN]$/    
        };
        
        prompt.message = '';
        prompt.delimiter = '';
        
        prompt.start();
        
        prompt.get(schema, function (err, result) {
            if (result.confirmDrop.toUpperCase() == 'N') {
                console.log('Exiting program..');
                process.exit(0);
            } else {
                // drop that db!
                callback(null);
            }
        });
    },
    /** unzip file if need be */
    function unzipFiles(callback) {
        console.log('unzipFiles');
        
        fs.readdir(dataDir, function (err, files) {
            var csvFound = false;
            
            for (var i = 0; i < files.length; i++) {
                if (path.extname(files[i]).toLowerCase() === '.csv') {
                    csvFound = true;
                    
                    break;
                }
            }
           
            if (csvFound) {
                console.log('Files already unzipped, proceeding..');
                callback(null, {});
            } else {
                // unzip files here
                console.log('Unzipping data files..');
                callback(null, {});
            }
        });
    },
    /** Create Tables */
    function createTables(arg1, callback) {
        console.log('createTables');
    }

    /** if mongo, just going to loop over files and shove them on in */
    
    /** else special handlers for each table? there's got to be a better way! */
    
    /** Add indexes, probably going to want to keep this basic. maybe offer more "thorough" options later */
    
    /** delete extracted csv files */
], function asyncWaterfallCallback(err, result) {
    
    console.log('hey, you\'re in the final waterfall callback!');
});
