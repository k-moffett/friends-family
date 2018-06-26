const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/eventfulFFtool');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected!');
});

let eventJsonSchema = new mongoose.Schema({
    content: 'mixed',
});

let json = mongoose.model('Json', eventJsonSchema)

const getJson = () => {
    return new Promise((resolve, reject) => {
        json.find((err, docs) => {
            if (err) {
                reject(err)
                } else {
                resolve(docs[0].content)
            }
        })
    })

}
module.exports = getJson;