const hotelsRoutes = require('./hotels_routes');

module.exports = (app, db) => {
    hotelsRoutes(app, db);
    // Other routes groups could go here, in the future.
};