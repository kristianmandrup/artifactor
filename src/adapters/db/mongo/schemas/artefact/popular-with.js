module.exports = {
  name: { type: String, trim: true },
  artefactType: { type: String, trim: true },
  combinedCount: {
    type: Number,
    minimum: 0      
  }  
};
