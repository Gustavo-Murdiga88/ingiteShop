import { GetServerSideProps } from "next";
import Header from "next/head";
import Image from "next/future/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { stripe } from "lib/stripe";
import Link from "next/link";

import { ContainerProduct, Product } from "styles/pages/home";

import Stripe from "stripe";

type HomeProps = {
  products: {
    id: string;
    price: string;
    name: string;
    description: string;
    img: string;
  }[];
};
export default function Home({ products }: HomeProps) {
  const [containerRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  });

  return (
    <>
      <Header>
        <title>Home</title>
      </Header>

      <ContainerProduct ref={containerRef} className="keen-slider">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
            <Product className="keen-slider__slide">
              <Image
                src={product.img}
                width={520}
                height={480}
                alt="camiseta1"
              />
              <footer>
                <span>{product.name}</span>
                <span>{product.price}</span>
              </footer>
            </Product>
          </Link>
        ))}
      </ContainerProduct>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = (product.default_price as Stripe.Price).unit_amount;
    const priceID = (product.default_price as Stripe.Price).id;
    const priceFormatted = Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price / 100);
    return {
      id: product.id,
      price: priceFormatted,
      name: product.name,
      description: product.description,
      img: product.images[0],
    };
  });

  return {
    props: {
      products,
    },
  };
};
