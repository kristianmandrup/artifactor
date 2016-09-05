class Entities {
  validate() {
    return this.list.indexOf(this.entity) ? true : false;
  }

  get names() {
    return ['app', 'component', 'plugin', 'lib']; 
  } 

  get list() {
    return ['apps', 'components', 'plugins', 'libs']; 
  } 
}

module.exports = new Entities();