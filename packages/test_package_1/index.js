exports.setupCloudFunctions = function () {
    console.log('>>>>>>>>>setting up cloud function testFunction');
    Parse.Cloud.define('testFunction', () => 'function working from package!!');
};
