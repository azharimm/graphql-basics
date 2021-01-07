import { GraphQLServer } from 'graphql-yoga'

//Demo users data
const users = [
    {id: '1', name: 'Azhari', email: 'azhar@example.com', age: 25},
    {id: '2', name: 'Saniscara', email: 'saniscara@example.com', age: 19},
    {id: '3', name: 'Sarah', email: 'sarah@example.com'},
]

const posts = [
    {id: '1', title: 'The first post', body: 'Hello this is the first post', published: true, author: '1'},
    {id: '2', title: 'The second post', body: 'Hello this is the second post', published: false, author: '1'},
    {id: '3', title: 'The third post', body: 'Hello this is the third post', published: true, author: '3'},
]

const comments = [
    {id: '1', text: 'Hello thanks for sharing!', author: '2', post: '1'},
    {id: '2', text: 'It is working for me', author: '3', post: '1'},
    {id: '3', text: 'Nice content', author: '3', post: '2'},
    {id: '4', text: 'GG', author: '2', post: '2'},
]

//Type definitions (schema)
const typeDefs = `
    type Query {
        users(query: String): [User!]!
        posts(query: String): [Post!]
        comments: [Comment!]!
        me: User
        post: Post,
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        posts: [Post!]!
        comments: [Comment!]!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean
        author: User!
        comments: [Comment!]!
    }

    type Comment {
        id: ID!
        text: String!
        author: User!
        post: Post!
    }
`

//Resolvers
const resolvers = {
    Query: {
        users(parent, args, ctx, info) {
            if(!args.query) {
                return users;
            }
            
            return users.filter((user) => {
                return user.name.toLowerCase().includes(args.query.toLowerCase())
            })
            
        },
        posts(parent, args, ctx, info) {
            if(!args.query) {
                return posts
            }

            return posts.filter((post) => {
                const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
                const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase())
                return  isTitleMatch || isBodyMatch 
            })
        },
        comments(parent, args, ctx, info) {
            return comments;
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
    },
    //relationship resolver 
    Post: {
        author(parent, args, ctx, info) {
            return users.find((user) => user.id === parent.author)
        },
        comments(parent, args, ctx, info) {
            return comments.filter(comment => comment.post === parent.id)
        }
    },
    User: {
        posts(parent, args, ctx, info) {
            return posts.filter(post => post.author === parent.id)
        },
        comments(parent, args, ctx, info) {
            return comments.filter(comment => comment.author === parent.id)
        }
    },
    Comment: {
        author(parent, args, ctx, info) {
            return users.find((user) => user.id === parent.author)
        },
        post(parent, args, ctx, info) {
            return posts.find(post => post.id === parent.post)
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