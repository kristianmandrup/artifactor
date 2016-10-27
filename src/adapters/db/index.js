const config = require('../config');
const BaseAdapter = require('../base');

class DbAdapter extends BaseAdapter {
  // TODO: move entity into params. Much more flexible
  constructor(entity, {params}) {
    super(entity, {params});
    this.adapter = this.resolvedAdapter;
  }

  get resolvedAdapter() {
    return config.db ? require(`./${config.db}`) : {};
  }
}

