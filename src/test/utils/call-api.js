const agent = require('./agent');

module.exports = async function(path, method = 'GET') {
  const fullServerPath = `localhost:3000/${path}`;
  console.log(method, ' @ ', fullServerPath);

  return agent(method, fullServerPath)
    .end()
    .then(res => {
      return res; 
    }, (err) => {
      //err.response has the response from the server
      console.error('Agent error', err);
      throw 'Unable to retrieve list of apps'; 
    }); 
}