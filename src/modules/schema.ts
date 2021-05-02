import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { user, usersList, userCreate } from './user';
import { bookmark, bookmarksList, bookmarkCreate } from './bookmark';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user,
      usersList,
      bookmark,
      bookmarksList
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      userCreate,
      bookmarkCreate
    }
  })
});