const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/eventfulFFtool');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

let titleBlackListSchema = new mongoose.Schema({
    item: 'string',
});

let title_BL = mongoose.model('Title_BL', titleBlackListSchema)

const titleBLModel = {
    addTerm(param) {
        return new Promise((resolve, reject) => {
            let newItem = new title_BL({
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
            title_BL.find((err, docs) => {
                if (err) {
                    reject(err)
                    } else {
                    resolve(docs)
                }
            })
        })
    }
}

module.exports = titleBLModel;