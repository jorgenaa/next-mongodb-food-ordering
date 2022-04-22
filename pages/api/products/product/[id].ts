// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from "../../../../framework/utils/dbConnect"
import productModel from "../../../../framework/models/Product"
//const { products } = require("../products_two.json")

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const {
        method,
        query: {id},
    } = req;

    dbConnect()

    if(method === "GET") {
        try {
            //const product = await products.find((x: any) => x._id === id);
            const product = await productModel.findById(id);
            if(!product) {
                return res.status(400).json({success: false})
            }
            res.status(200).json({ success: true, data: product })
        } catch (error) {
            res.status(500).json({ success: false })
        }
    }
}
