module.exports = {
  create: function(entity, id) {
    return new DataFaker(entity, id);
  }
}