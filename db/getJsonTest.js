const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/eventfulFFtool');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

let eventJsonSchema = new mongoose.Schema({
    content: 'mixed',
});

let json = mongoose.model('Json', eventJsonSchema)

const getJsonTest = () => {
    return new Promise((resolve, reject) => {
        json.find((err, docs) => {
            if (err) {
                reject(err)
                } else {
                    console.log(docs[0].content.events.tabular.events.length)
                resolve(docs[0].content)
            }
        })
    })

}
getJsonTest()
module.exports = getJsonTest;