import { productSchema } from "../../schema/product.schema";

export const productResolvers = {
    Query: {
        getProducts: async () => {
            const products = await productSchema.find();
            return products;
        },
        getProduct: async (_:any, { id }: any) => {
            const product = await productSchema.findById(id);
            return product;
        }
    },
    Mutation: {
        createProduct: async (_:any, { input }: any) => {
            const product = await productSchema.create(input);
            return product;
        },
        updateProduct: async (_:any, {id, input}: any) => {
            const product = await productSchema.findByIdAndUpdate(id, input, {new: true});
            return product;
        },
        deleteProduct: async (_:any, {id, input}: any) => {
            const product = await productSchema.findByIdAndRemove(id);
            return product;
        },
        deleteProducts: async () => {
            await productSchema.deleteMany({});
            return "All data has been deleted";
        },
    }
}