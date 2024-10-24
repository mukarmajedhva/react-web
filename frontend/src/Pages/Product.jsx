import React from 'react'
import { useParams } from 'react-router-dom'
import all_products from '../assets/all_products';
import ProductHd from '../Componants/ProductHd';
import ProductDisplay from '../Componants/ProductDisplay';
import PopularProduct from '../Componants/PopularProduct';
import ProductDescription from '../Componants/ProductDescription';


const Product = () => {

  const { productId } = useParams();
  console.log("productId: " , productId);

  const product = all_products.find((e) => e.id === Number(productId));
  if(!product)
  {
    return <div>product not found!</div>
  }

  return (
    <section>
      <div>
        
        <ProductHd product={product} />
        <ProductDisplay product={product}/>
        <ProductDescription />
        <PopularProduct/>
      </div>
    </section>
  )
}

export default Product
