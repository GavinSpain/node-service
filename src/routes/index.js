function setupRoutes(app) {
    app.get('/api/heartbeatstatus', (req, res) => {
        // Enable CORS
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET');
        
        const heartbeatData = [];
        
        for (let i = 1; i <= 5; i++) {
            heartbeatData.push({
                service_id: i,

                seconds_since_last: Math.floor(Math.random() * 30)
            });
        }
        
        res.json(heartbeatData);
    });
}

module.exports = setupRoutes;