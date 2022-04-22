// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from "../../../framework/utils/dbConnect"
//const { products } = require("./products.json")
import productModel from '../../../framework/models/Product'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { method } = req;
  
  dbConnect()

  if(method === "GET") {
   
    try {
      const products = await productModel.find()
      res.status(200).json(products)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
