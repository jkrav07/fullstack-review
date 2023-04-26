const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {

  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    method: 'get',
    username: 'jkrav07',
    url: `https://api.github.com/users/${username}/repos`,
    //auth: config.TOKEN,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${config.TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
      //'User-Agent': 'request',
      //'Authorization': `token ${config.TOKEN}`
    }
  };

  axios(options)
  .then(function(response) {
    callback(null, response.data);
  })
  .catch(err => {
    callback(err, null);
  })
}

module.exports.getReposByUsername = getReposByUsername;