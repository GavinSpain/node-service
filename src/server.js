const express = require('express');
const cors = require('cors');
const app = express();

const allowedOrigins = [
    'https://spainymatrix.xyz',
    'https://www.spainymatrix.xyz',
    'http://localhost',
    'http://localhost:3001'
];

app.use(cors({

    origin: function(origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']

}));
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
    res.status(200).json({
      status: 'success',
      message: 'Node service root endpoint'
    });
});

// Heartbeat endpoint
app.get('/api/heartbeatstatus', (req, res) => {
    res.status(200).json({
      status: 'success',
      message: 'Service is healthy'
    });
});
    const port = 3001;
    app.listen(port, '0.0.0.0', () => {
      console.log(`HTTP Server running on port ${port}`);

const port = 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`HTTP Server running on port ${port}`);
});