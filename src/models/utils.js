function stringify(obj) {
  return JSON.stringify(obj, null, 2)
}

function display(obj, header) {
  if (header)
    console.log(header)
  console.log(stringify(obj));
}

module.exports = {
  display
}