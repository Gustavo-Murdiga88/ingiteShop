import {
  ContainerSuccess,
  FooterSuccess,
  ProductContainer,
} from "../../styles/pages/success";
import {GetServerSideProps} from 'next';
import Image from "next/future/image";
import Link from 'next/link'

import camiseta1 from '../../../public/assets/1.png'
import { stripe } from "lib/stripe";
import Stripe from "stripe";

type SuccessProduct = {
  name: string; 
  description: string;
  img: string;
}

export default function Sucess({description, img, name}: SuccessProduct) {
  return (
    <ContainerSuccess>
      <p>Compra Efetuada!</p>
      <ProductContainer>
        <Image src={img} width={127}  height={145} alt="" />
      </ProductContainer>

      <FooterSuccess>
        <p>
          Uhuul <strong>{name},</strong> sua{' '} 
          <strong>{description}</strong>{' '} já está a caminho da sua
          casa.
        </p>

        <Link href='/'>
            Voltar ao catálogo
        </Link>
        
      </FooterSuccess>
    </ContainerSuccess>
  );
}


export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const  id  = String(query.id);

  const response = await stripe.checkout.sessions.retrieve(id, {
    expand:['line_items', 'line_items.data.price.product'], 
  });

  const data = {
    name: response.customer_details.name,
    description: response.line_items.data[0].description,
    img: (response.line_items.data[0].price.product as Stripe.Product).images[0], 
  }

  return {
    props:{
      ...data
    }
  }
}