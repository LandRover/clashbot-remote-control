require('dotenv').config({path: __dirname + '/../.env'});

module.exports = {
    autoit: process.env.AUTOIT_SERVER,
    fb: {
        appID: process.env.FB_CLIENT_ID,
        secret: process.env.FB_CLIENT_SECRET,
        users: process.env.FB_ALLOWED_USERS
    }
};