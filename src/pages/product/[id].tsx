import { GetStaticPaths, GetStaticProps } from "next";
import Image from 'next/future/image';
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import {
  ProductContainer,
  ImageProduct,
  ProductDetails,
} from "styles/pages/product";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";


type ProductProps = {
    price: string;
    name: string;
    description: string;
    img: string;
    priceID: string;
};

export default function Product({description, img, priceID, name, price}: ProductProps) {
  const { isFallback } = useRouter();
  
  const [creatingCheckoutSession, setCreatingCheckoutSession] = useState(false);

  if(isFallback){
    return <div> ...carregando</div>
  }

  async function handleBuyProduct(){
    try{
      setCreatingCheckoutSession(true);
      const response = await axios.post('/api/checkout',{
        id: priceID,
      })

      const {checkoutUrl} = response.data
      window.location.href = checkoutUrl;

    }catch(err){
      setCreatingCheckoutSession(false);
      console.error(err)
    }
  }


  return (
    <ProductContainer>
      <ImageProduct>
        <Image src={img} width={520} height={480} alt={name}/> 
      </ImageProduct>
      <ProductDetails>
        <span>{name}</span>
        <span>{price}</span>
        <p>{description}</p>

        <button onClick={handleBuyProduct} disabled={creatingCheckoutSession}>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}


export const getStaticPaths: GetStaticPaths = async () => {
  return{
    paths:[
      {
        params: {id: 'prod_MOIScrRycGsmX6'},
      }
    ],
    fallback: true,
  }
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const { id } = params;
  const product = await stripe.products.retrieve(id, {
    expand: ['default_price']
  });

  const price = (product.default_price as Stripe.Price).unit_amount;
  const priceID = (product.default_price as Stripe.Price).id;
  const priceFormatted = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: "BRL",
  }).format(price / 100);
  return {
    props:{
      id: product.id,
      price: priceFormatted,
      name: product.name,
      description: product.description,
      img: product.images[0],
      priceID,
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
