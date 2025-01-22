const https = require('https');
const express = require('express');
const fs = require('fs');
const app = express();

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/www.spainymatrix.xyz/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/www.spainymatrix.xyz/fullchain.pem')
};

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.status(200).json({
      status: 'success',
      message: 'Node service is running!'
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
});

const server = https.createServer(options, app);

server.listen(3443, '0.0.0.0', () => {
    console.log('HTTPS Server running on port 3443');
});