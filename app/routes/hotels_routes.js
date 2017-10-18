module.exports = (app, db) => {
    app.post('/hotels', (req, res) => {
        console.log(req.body);
        res.send('Hoteles?');
    });

    app.get('/hotels', (req, res) => {
        res.send({ 'hotels': [] });
    });
};