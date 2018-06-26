const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/eventfulFFtool');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected!');
});

let eventSchema = new mongoose.Schema({
    title: 'string',
    venue: 'string',
    owner: 'string'
});

let event = mongoose.model('Event', eventSchema)

const getEvents = () => {
    return new Promise((resolve, reject) => {
        event.find((err, docs) => {
            if (err) {
                reject(err)
                } else {
                resolve(docs)
            }
        })
    })

}
module.exports = getEvents;