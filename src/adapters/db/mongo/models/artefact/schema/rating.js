module.exports = {
  rating: {
    type: Number,
    min: 0, 
    max: 5
  },  
  comment: { type: String, trim: true },
  username: { type: String, trim: true }
};
