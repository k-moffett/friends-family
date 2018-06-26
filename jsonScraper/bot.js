// const Nightmare = require('nightmare')
// const nightmare = Nightmare({ show: true })
 
// nightmare
//   .goto('https://event-review.evdb.com/json/family?page_number=1')
//   .type()
//   .end()
//   .then(console.log)
//   .catch(error => {
//     console.error('Search failed:', error)
//   })

const cypress = require('cypress')

cypress.run({
  browser: 'chrome',
  config: {
    baseUrl: 'https://event-review.evdb.com/json/family?page_number=1'
  }
}).then((results) => {
    console.log(results)
  })
  .catch((err) => {
    console.error(err)
  })