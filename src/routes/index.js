function setupRoutes(app) {
    app.get('/api/heartbeatstatus', (req, res) => {
        const heartbeatData = [];
        
        for (let i = 1; i <= 5; i++) {
            heartbeatData.push({
                service_id: i,
                seconds_since_last: Math.floor(Math.random() * 40)
            });
        }
        
        res.json(heartbeatData);
    });
}
module.exports = setupRoutes;