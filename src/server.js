const https = require('https');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/www.spainymatrix.xyz/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/www.spainymatrix.xyz/fullchain.pem')
};

// CORS middleware configuration
app.use(cors({
    origin: 'https://spainymatrix.xyz',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.get('/api/heartbeatstatus', (req, res) => {
    res.status(200).json({
      status: 'success',
      message: 'Service is healthy'
    });
});

const server = https.createServer(options, app);

server.listen(3443, '0.0.0.0', () => {
    console.log('HTTPS Server running on port 3443');
});