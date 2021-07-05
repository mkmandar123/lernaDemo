const package1 = require('@mkmandar123/test_package_1');

var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();

var api = new ParseServer({
    databaseURI: 'mongodb://localhost:27017/dev', // Connection string for your MongoDB database
    appId: 'myAppId',
    masterKey: 'myMasterKey', // Keep this key secret!
    serverURL: 'localhost:1337/api/parse' // Don't forget to change to https if needed
});

console.log('>>>>>setting cloud function from main file>>>>>> testFunction2');
Parse.Cloud.define('testFunction2', () => 'working from main')

package1.setupCloudFunctions();

// Serve the Parse API on the /parse URL prefix
app.use('/api/parse', api);

app.listen(1337, function() {
    console.log('parse-server-example running on port 1337.');
});
