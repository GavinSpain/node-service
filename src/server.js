const express = require('express');
const cors = require('cors');
const app = express();

const allowedOrigins = [
    'https://spainymatrix.xyz',
    'https://www.spainymatrix.xyz',
    'http://localhost',
    'http://localhost:3001'
];

const corsOptions = {
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
      status: 'success',
      message: 'Node service root endpoint'
    });
});


app.get('/api/heartbeatstatus', (req, res) => {
    res.status(200).json({
      status: 'success',
      message: 'Service is healthy'
    });
});

const port = 3001;
const server = app.listen(port, '0.0.0.0', () => {
    console.log(`HTTP Server running on port ${port}`);
});