// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from "../../../framework/utils/dbConnect"
import productModel from '../../../framework/models/Product'
//const { products } = require("./products.json")


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const {
        method,
        query: {slug},
        cookies
    } = req;

    dbConnect()

    if(method === "GET") {
        try {
            const product = await productModel.find({slug: slug})
            //const product = await products.filter((product: any) => product.slug === slug);
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
