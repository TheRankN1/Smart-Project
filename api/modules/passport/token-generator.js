const jwt = require('jsonwebtoken');

function generateToken(user) {
    return jwt.sign(
        {
            ...user,
            iat: new Date().getTime(),
            exp: new Date().setDate(new Date().getDate() + 2)
        },
        '215125126121asa'
    );
}

module.exports = {generateToken};