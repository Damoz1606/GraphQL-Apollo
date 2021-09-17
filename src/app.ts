import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

import config from './config/config';
import { typeDefs } from './app/graphql/typeDefs';
import { productResolvers } from './app/graphql/resolvers/product.resolver';

const app = express();

//settings
app.set("port", config.PORT);

//middlewares
app.use(cors());
// app.use(morgan("dev"));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

//GraphQL

const startServer = async () => {
    const server = new ApolloServer({ typeDefs, resolvers: [productResolvers]});
    await server.start();
    server.applyMiddleware({ app, path:"/graphql" });
}
startServer();


export default app;