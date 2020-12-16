import { GraphQLServer } from 'graphql-yoga'

//Type definitions (schema)
const typeDefs = `
    type Query {
        title: String!
        price: Float!
        releaseYear: Int
        rating: Float
        inStock: Boolean
    }
`

//Resolvers
const resolvers = {
    Query: {
        title() {
            return 'AOC G2490VX 23.8 inch Full HD 144hz 1ms Adaptive Sync Gaming Monitor'
        },
        price() {
            return 199.99
        },
        releaseYear() {
            return 2020
        },
        rating() {
            return null
        },
        inStock() {
            return true
        },
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log(`The server is up!`);
});