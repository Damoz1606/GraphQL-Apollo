import { gql } from "apollo-server-core";

export const typeDefs = gql`
    type Query {
        getProducts: [Product]!
        getProduct(id: ID!): Product!
    }

    type Mutation {
        createProduct(input: inputProduct!): Product!
        updateProduct(id: ID!, input:inputProduct!): Product!
        deleteProduct(id: ID!): Product!
        deleteProducts: String!
    }

    type Product {
        _id: ID
        name: String!
        qty: Int!
    }

    input inputProduct {
        name: String!
        qty: Int!
    }
`;