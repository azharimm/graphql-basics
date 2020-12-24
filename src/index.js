import { GraphQLServer } from 'graphql-yoga'

//Type definitions (schema)
const typeDefs = `
    type Query {
        greeting(name: String, position: String): String!
        add(numbers: [Float!]!): Float!
        grades: [Int!]!
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
        greeting(parent, args, ctx, info) {
            if(args.name && args.position) {
                return `Hello ${args.name}! I am a ${args.position}`
            }
            return 'Hello'
        },
        add(parent, args, ctx, info) {
            if(args.numbers.length === 0) {
                return 0
            }
            //[1, 5, 7]
            return args.numbers.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
            })
        },
        grades(parent, args, ctx, info) {
            return [99, 23, 74]
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