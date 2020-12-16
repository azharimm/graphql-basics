import { GraphQLServer } from 'graphql-yoga'

//Type definitions (schema)
const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String!
    }
`

//Resolvers
const resolvers = {
    Query: {
        hello() {
            return 'This is my first query!'
        },
        name() {
            return 'Azhari Muhammad M'
        },
        location() {
            return 'Cianjur'
        },
        bio() {
            return 'An introverted bastard!'
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log(`The server is up!`);
});