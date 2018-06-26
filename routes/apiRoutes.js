const getEvents = require('../db/getEventsModel')
const getRealEvents = require('../db/getRealEvents')
const titleBLModel = require('../db/titleBlackListModel')
const venueBLModel = require('../db/venueBlackListModel')
const getJson = require('../db/getJsonModel')

module.exports = (app) => {

  app.get('/api/get_all', (req, res) => {
    Promise.all([/*getEvents()*/ getJson(), titleBLModel.getAllTerms(), venueBLModel.getAllTerms()]).then(function(values) {
      res.send(values)
    });
  })

  app.get('/api/family_data', (req, res) => {
    getEvents()
    .then((response) => {
      res.send(response)
    })
  });

  app.get('/api/title_blacklist', (req, res) => {
    titleBLModel.getAllTerms()
    .then((response) => {
      res.send(response)
    })
  });

  app.get('/api/venue_blacklist', (req, res) => {
    venueBLModel.getAllTerms()
    .then((response) => {
      res.send(response)
    })
  });

  app.post('/api/title_blacklist', (req, res) => {
    titleBLModel.addTerm(req.body.term)
    .then((response) => {
      titleBLModel.getAllTerms()
      .then((response) => {
        res.send(response)
      })
    })
  });

  app.post('/api/venue_blacklist', (req, res) => {
    venueBLModel.addTerm(req.body.term)
    .then((response) => {
      venueBLModel.getAllTerms()
      .then((response) => {
        res.send(response)
      })
    })
  });


}