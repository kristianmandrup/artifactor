const obj = {
  BaseIo: require('./base'),
  file: require('./file'),
  json: require('./json')
}

obj.create = function(entity, id) {
  return {
    file: obj.file.create(entity, id),
    json: obj.json.create(entity, id)
  }
}

console.log('export', obj)

module.exports = obj;
