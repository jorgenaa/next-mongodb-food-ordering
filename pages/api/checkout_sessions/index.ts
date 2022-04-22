import { STRIPE_SK } from '@framework/stripe-utils/stripe-constants'
import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = new Stripe(STRIPE_SK!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2020-08-27',
  typescript: true,
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const {lineItems} = req.body
  
    if (req.method === 'POST') {
      try {
        const session: any = await stripe.checkout.sessions.create({
          line_items: lineItems,
          payment_method_types: ['card'],
          phone_number_collection: {
            enabled: true,
          },
          mode: 'payment',
          success_url: `${req.headers.origin}/successPage=true&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/home`,
        });
        res.status(200).json({sessionId: session.id});
        
      } catch (err: any) {
        res.status(err.statusCode || 500).json(err.message);
      }
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
}
