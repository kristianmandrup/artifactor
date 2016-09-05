module.exports = new Schema({
  name: {type: String, required: false },
  alias: {type: String, index: true},
  email: String,
  organisation: String,
  profile: String
});
