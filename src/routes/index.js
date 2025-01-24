function setupRoutes(app) {
    app.get('/api/heartbeatstatus', (req, res) => {
        console.log('--------------------');
        console.log('Incoming request at:', new Date().toISOString());
        console.log('Request headers:', req.headers);
        console.log('Client IP:', req.ip);
        console.log('Request URL:', req.originalUrl);
        
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET');
        
        const heartbeatData = [];
        
        for (let i = 1; i <= 5; i++) {
            heartbeatData.push({ 
                service_id: i,
                seconds_since_last: Math.floor(Math.random() * 30)
            });
        }
        
        console.log('Sending response:', heartbeatData);
        res.json(heartbeatData);
    });

    // Add error handling middleware
    app.use((err, req, res, next) => {
        console.error('Error occurred:', err);
        console.error('Stack trace:', err.stack);
        res.status(500).json({ error: 'Internal server error' });
    });
}module.exports = setupRoutes;