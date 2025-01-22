const express = require('express');
const https = require('https');
const fs = require('fs');
const dotenv = require('dotenv');
const routes = require('./routes/index');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 443;

// Middleware to parse JSON requests
app.use(express.json());

// Set up routes
routes(app);

// HTTPS options
const options = {
    key: fs.readFileSync(process.env.SSL_KEY_PATH),
    cert: fs.readFileSync(process.env.SSL_CERT_PATH)
};

// Create HTTPS server
https.createServer(options, app).listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});