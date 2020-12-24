import { GraphQLServer } from 'graphql-yoga'

//Type definitions (schema)
const typeDefs = `
    type Query {
        greeting(name: String, position: String): String!
        add(a: Float!, b: Float!): Float!
        me: User
        post: Post
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean
    }
`

//Resolvers
const resolvers = {
    Query: {
        greeting(parent, args, ctx) {
            if(args.name && args.position) {
                return `Hello ${args.name}! I am a ${args.position}`
            }
            return 'Hello'
        },
        add(parent, args, ctx) {
            const { a, b } = args;
            if(a && b) {
                return a + b
            }
        },
        me() {
            return {
                id: '123qweasdzxc',
                name: 'Sanggrama Wijaya',
                email: 'sanggramawijaya@mail.com',
                age: null
            }
        },
        post() {
            return {
                id: 'post123',
                title: 'My first post',
                body: 'Hello there! i am learning graphql now',
                published: true
            }
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