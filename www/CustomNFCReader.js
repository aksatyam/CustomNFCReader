var exec = require('cordova/exec');

module.exports.connect = function (success, error) {
    exec(success, error, 'CustomNFCReader', []);
}

module.exports.disconnect = function (success, error) {
    exec(success, error, 'CustomNFCReader', []);
}