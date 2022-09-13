import { stripe } from "lib/stripe";
import { NextApiResponse, NextApiRequest} from "next";

export default async function Checkout( req:NextApiRequest, res:NextApiResponse){
    const { id } = req.body; 

    if(!id){
        res.status(405).json({message:'Method not allowed'});
    }

    if(req.method !== 'POST'){ 
        res.status(405).json({message:' Method not allowed'});
    }

    const successUrl = `${process.env.NEXT_ROUTE}/success?id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${process.env.NEXT_ROUTE}/`;
    const checkoutUrl = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: [
            {
                price: id,
                quantity: 1,
            }
        ]
    })

    res.status(201).json({
        checkoutUrl: checkoutUrl.url,
    })
}