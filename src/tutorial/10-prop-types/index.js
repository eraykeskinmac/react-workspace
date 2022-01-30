import React from 'react';
import { useFetch } from '../9-custom-hooks/2-useFetch';
import Product from './Product';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-prop-types-example';

const Index = () => {
  const { products } = useFetch(url);
  return (
    <div>
      <h2>products</h2>
      <section className='products'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
