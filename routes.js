var usersCtr = require('./controllers/user.js');
var homeCtr = require('./controllers/home.js');

module.exports = function(app){
    app.get('/', homeCtr.index );
};
