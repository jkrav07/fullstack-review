const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  url: String,
  ownerId: Number,
  ownerLogin: String,
  forks: Number

});

let Repo = mongoose.model('Repo', repoSchema);


let save = (arr) => {
  let p = arr.map(obj => {
    return Repo.find({id: obj.id })
      .then(function(result) {
        if (result.length === 0) {
          let repo = new Repo({
            id: obj.id,
            name: obj.name,
            url: obj.html_url,
            ownerId: obj.owner.id,
            ownerLogin: obj.owner.login,
            forks: obj.forks_count
          });

          repo.save(function (err, repo) {
            if (err) return console.log(`REPO NOT ADDED`, err);
            console.log(`REPO ADDED:`, repo);
          });
        }
      })
  })
  return Promise.all(p);


}

let pull = (callback) => {
  Repo.find().sort({"forks":1}).limit(25).exec((err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

module.exports.save = save;
module.exports.pull = pull;