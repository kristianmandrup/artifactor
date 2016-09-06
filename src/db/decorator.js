function noSuchVersion(number) {
  throw `No such version ${number}`;
}

function warnNoSuchVersion(number) {
  console.error('No such version', number);
}

module.exports = function decorate(schema, modelName) {
  schema.query.findByName = (name) => {
    return this.find({
      name: new RegExp(name, 'i')
    });
  };

  // See: http://mongoosejs.com/docs/subdocs.html
 
  schema.methods.latestVersion = (name) => {
    return this.versions.sort({number: -1}).exec()[0];
  }    

  schema.methods.addVersion = (version) => {
    return this.versions.push(version);
  }

  schema.methods.removeVersion = (id) => {
    return this.versions.id(id).remove();
  }

  schema.methods.findVersion = (id) => {
    return this.versions.find({version: number}).exec();
  }

  schema.methods.rateVersion = (number, rating) => {
    try {
      this.findVersion(number).then(version => {
        return version ? version.ratings.push(rating) : noSuchVersion(number); 
      }).catch(err => noSuchVersion(number))
    } catch (err) {
      warnNoSuchVersion(number)
    }
  }

  // see rateVersion for perhaps a better way!?
  schema.methods.rateLatest = (rating) => {
    this.latestVersion().then(version => {
      return version.ratings.push(rating);
    }).catch(err => {
      console.error('rateLatest', err);
    })    
  }
};