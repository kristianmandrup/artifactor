module.exports = function (path, method = 'GET') {
  return function get() {
    return agent(method, path)
      .end()
      .then(res => {
        return res; 
      }, (err) => {
        //err.response has the response from the server
        throw 'Unable to retrieve list of apps'; 
      });
  } 
}