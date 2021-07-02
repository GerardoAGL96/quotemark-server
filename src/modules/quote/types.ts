import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInputObjectType } from 'graphql'
import { GraphQLDateTime } from '../../shared/graphql-types'
import { User, user } from '../user'

export const Quote = new GraphQLObjectType({
  name: 'Quote',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    content: { type: GraphQLString },
    link: { type: GraphQLString },
    user: {
      type: User,
      resolve: async (data, _, context, info) => {
        if (user.resolve) {
          return await user.resolve({}, { id: data.userId }, context, info)
        }

        return null
      }
    },
    createdAt: { type: GraphQLDateTime },
    updatedAt: { type: GraphQLDateTime },
    deletedAt: { type: GraphQLDateTime }
  })
})

export const QuoteKeyFilter = new GraphQLInputObjectType({
  name: 'QuoteKeyFilter',
  fields: {
    id: {
      type: GraphQLID
    }
  }
})

export type QuoteType = {
  id: string,
  name: string,
  content: string,
  link: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: string,
}