/**
 * service.js
 *
 * Servicio de creación de los web tokens
 *
 * @type {*|exports|module.exports}
 */
var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../config/config');

exports.createToken = function(user) {
    //console.log(user);
    var payload = {
        sub: user.email,
        iat: moment().unix(),
        exp: moment().add(14, "days").unix(),
    };
    return jwt.encode(payload, config.TOKEN_SECRET);
};
