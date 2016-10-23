class Populated {
  constructor(model) {
    this.model = model;
  }

  // true if was populated
  isPopulated() {
  }
}

module.exports = function(model) {
  return new Populated(model);
}