const axios = require('axios')

const getRealEvents = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            'www-authenticate': 'Basic realm="t5628611fbfd4717f44b34190985f7c7c_4e32ce4d4d28e03c394fc5568c600a52"',
            url: 'https://event-review.evdb.com/json/family?page_number=1',
        })
        .then(function (response) {
            console.log(response.body, 'getRealEvents');
            resolve(response)
        })
         .catch(function (error) {
            console.log(error);
            reject(error);
        });
    })

}

module.exports = getRealEvents;