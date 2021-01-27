import { GraphQLServer } from "graphql-yoga";
import db from "./db";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import Post from "./resolvers/Post";
import User from "./resolvers/User";
import Comment from "./resolvers/Comment";
//Resolvers
const resolvers = {
    Query,
    Mutation,
    //relationship resolver
    Post,
    User,
    Comment,
};

const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers,
    context: {
        db,
    },
});

server.start(() => {
    console.log(`The server is up on port 4000`);
});
