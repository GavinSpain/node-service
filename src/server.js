const https = require('https');
const fs = require('fs');
const app = require('./app');

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/www.spainymatrix.xyz/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/www.spainymatrix.xyz/fullchain.pem')
};

const server = https.createServer(options, app);

server.listen(3443, () => {
    console.log('HTTPS Server started on port 3443');
    console.log('Using SSL certificate for www.spainymatrix.xyz');
});