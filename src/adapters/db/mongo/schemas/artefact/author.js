module.exports = {
  name: {
    type: String, 
    required: true,
    trim: true 
  },
  alias: {
    type: String, 
    index: true
  },
  email: String,
  organisation: String,
  profile: String
};
