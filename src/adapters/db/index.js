const config = require('../config');
const BaseAdapter = require('../base');

class DbAdapter extends BaseAdapter {
  // id is optional, used to indicate specific REST resource
  constructor(entity, {params}) {
    super(entity, {params});
    this.adapter = this.resolvedAdapter;
  }

  get resolvedAdapter() {
    return config.db ? require(`./${config.db}`) : {};
  }
}

