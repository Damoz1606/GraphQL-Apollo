import { Document } from "mongoose";

export interface Product extends Document {
    id?: string,
    name: string,
    qty: string
}