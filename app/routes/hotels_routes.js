// var assert = require('assert');

// Query methods
const getHotelsByLimit = (db, limit, offset, callback) => {
    db.collection('hotels').find().skip(offset).limit(limit).toArray(callback);
};

const findHotelsByName = (db, hotelName, callback) => {
    // create index for text search
    db.collection('hotels').createIndex({ id: "text", name: "text", slug: "text" });
    // find hotels by name
    db.collection('hotels').find({ $text: { $search: hotelName }}).toArray(callback);
};


module.exports = (app, db) => {

    app.get('/hotels', (req, res) => {
        const limit = parseInt(req.query.limit);
        const offset = parseInt(req.query.offset);

        if (limit !== null && offset !== null) {
            getHotelsByLimit(db, limit, offset, (error, data) => {
                if (error) {
                    // console.log(`Error: ${error}`);
                    res.json({ 'error': error });
                } else {
                    // console.log(`Data: ${data}`);
                    res.json({ 'hotels': data })
                }
            });
        }
    });

    app.get('/hotels_search', (req, res) => {
        const hotelName = req.query.name;

        if (hotelName !== null) {
            findHotelsByName(db, hotelName, (error, data) => {
                if (error) {
                    console.log(`Error: ${error}`);
                    res.json({ 'error': error });
                } else {
                    console.log(`Data: ${data}`);
                    res.json({ 'hotels': data })
                }
            });
        }
    });

};