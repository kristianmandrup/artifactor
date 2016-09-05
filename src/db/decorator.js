function noSuchVersion(number) {
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

  schema.methods.rateVersion = (number, rating) => {
    let version = this.versions.id(number);
    return version ? version.ratings.push(rating) : noSuchVersion(number);    
  }

  schema.methods.rateLatest = (rating) => {
    this.latestVersion().then(version => {
      return version.ratings.push(rating);
    }).catch(err => {
      console.error('rateLatest', err);
    })    
  }
};