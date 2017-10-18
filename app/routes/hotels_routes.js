module.exports = (app, db) => {
    app.post('/hotels', (req, res) => {
        console.log(req.body);
        res.send('Hoteles?');
    });

    // https://almundo.com.ar/hotels/async/1324298/allresult?date=2017-11-06,2017-11-17&rooms=2&type=CITY&limit=20
    app.get('/hotels', (req, res) => {
        res.send({ 'hotels': [] });
    });
};