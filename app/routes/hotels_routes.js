var assert = require('assert');

module.exports = (app, db) => {

    // app.post('/hotels', (req, res) => {
    //     console.log(req.body);
    //     res.send('Hoteles?');
    // });

    app.get('/hotels', (req, res) => {
        let cursor = db.collection('hotels').find();

        cursor.each((err, doc) => {
            assert.equal(err, null);

            if (doc !== null) {
                res.send({ 'hotels': doc.hotels });
            } else {
                db.close();
            }
        });
    });

};