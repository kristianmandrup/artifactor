class Entities {
  validate(entity, type = 'singular') {
    return this[type].includes(entity);
  }

  get singular() {
    return ['app', 'component', 'plugin', 'library', 'addon', 'theme']
  }

  get plural() {
    return ['apps', 'components', 'plugins', 'libraries', 'addons', 'themes']
  } 
}

module.exports = new Entities(); 