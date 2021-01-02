const expressJwt = require('express-jwt');
const config = require('../db.config');
const userService = require('../services/user.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    console.log(secret);
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            '/api/users/authenticate',
            '/api/users/register',
            '/api/users/getall',
            '/api/questions/findall',
            '/api/questions/create',
            '/api/answers/create',
            '/api/answers/findall',
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    if (!user) {
        return done(null, true);
    }

    done();
};