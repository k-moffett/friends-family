const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/eventfulFFtool');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

let venueBlackListSchema = new mongoose.Schema({
    item: 'string',
});

let venue_BL = mongoose.model('Venue_BL', venueBlackListSchema)

const venueBLModel = {
    addTerm(param) {
        return new Promise((resolve, reject) => {
            let newItem = new venue_BL({
                item: param
            });
        
            newItem.save((err, newItem) => {
                if (err) {
                    reject(err)
                    } else {
                    resolve('ok')
                }
            })
        })
    },

    getAllTerms() {
        return new Promise((resolve, reject) => {
            venue_BL.find((err, docs) => {
                if (err) {
                    reject(err)
                    } else {
                    resolve(docs)
                }
            })
        })
    }
}

module.exports = venueBLModel;