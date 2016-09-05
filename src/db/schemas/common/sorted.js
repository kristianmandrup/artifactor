// From: http://stackoverflow.com/questions/25449570/mongoose-default-sorting-order

module.exports = function (query, fields, options){
  //First 3 parameters are optional
  if( arguments.length === 1){
      cb = query;
  } else if (arguments.length === 2) {
      cb = fields;
  } else if(arguments.length === 3){
      cb = options;
  }

  return this.find(query, fields, options).sort('-createdAt').exec(cb);
}