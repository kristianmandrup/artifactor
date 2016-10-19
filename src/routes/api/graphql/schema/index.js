module.exports = new GraphQLObjectType({
  name: 'MyType',
  fields: {
    myField: {
      type: GraphQLString,
      resolve(parentValue, args, ctx) {
        // use `ctx.session` here
      }
    }
  }
});