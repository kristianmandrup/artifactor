const Author = require('./author');
const Environment = require('./environment');
const Rating = require('./rating');
const PopularWith = require('./popular-with');

module.exports = {
  name: String,
  description: String,
  date: Date,
  status: String,
  notice: String,  
  version: String,
  avgRating: Number,
  ratings: [Rating],
  author: Author,
  artefactType: [String],
  keywords: [String],
  categories: [String],
  environment: Environment,
  location: String, // todo: allow name or alias
  installations: {
    type: Number,
    min: 0, 
  },
  popularWith: [PopularWith]
};
