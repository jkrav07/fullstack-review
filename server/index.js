const express = require('express');
const {getReposByUsername} = require('../helpers/github.js')
const {save} = require('../database/index.js')
const {pull} = require('../database/index.js')

let app = express();
app.use(express.static('client/dist'));
app.use(express.json());



app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
console.log(req.body);
  getReposByUsername(req.body.username, function(err, data) {
    save(data)
    .then((data) => {
      res.json('request handled');
    })
  });
});

app.get('/repos', function (req, res) {
  pull((err, data) => {
    res.json(data);
  })

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

