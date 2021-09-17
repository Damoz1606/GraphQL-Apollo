import { model, Schema } from "mongoose";
import { Product } from "../interfaces/product";

const schema = new Schema ({
    name: String,
    qty: {
        type: Number,
        default: 0
    }
},
{
    versionKey: false,
    timestamps: false
});

export const productSchema = model<Product>('Product', schema);