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




app.get('/api/heartbeatstatus', (req, res) => {
    console.log('--------------------');
    console.log('Incoming request at:', new Date().toISOString());
    console.log('Request headers:', req.headers);
    console.log('Client IP:', req.ip);
    console.log('Request URL:', req.originalUrl);
    
    const heartbeatData = [];
    
    for (let i = 1; i <= 5; i++) {
        heartbeatData.push({ 
            service_id: i,
            seconds_since_last: Math.floor(Math.random() * 30)
        });
    }
    
    const response = {
      heartbeats: heartbeatData
    };

    console.log('Sending response:', heartbeatData);
    res.json(heartbeatData);
});

const port = process.env.PORT || 3001;
const server = app.listen(port, '0.0.0.0', () => {
    console.log(`HTTP Server running on port ${port}`);
});