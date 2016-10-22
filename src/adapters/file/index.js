const BaseAdapter = require('../base');

class FileAdapter extends BaseAdapter {
  // id is optional, used to indicate specific REST resource
  constructor(entity, {params}) {
    super(entity, {params});
  }
}

// TODO: externalize
module.exports = (entity, {params}) => {
  return new FileAdapter(entity, {params});
} 