import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Breadcrums } from '../Component/Breadcrums/Breadcrums';
import { Discriptionbox } from '../Component/Descriptionbox/Discriptionbox';
import { Productdisplay } from '../Component/Productdisplay/Productdisplay';
import { Relatedproduct } from '../Component/Related-Products/Relatedproduct';
import { ShopContext } from '../Context/ShopContext'

export const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product}/>
      <Productdisplay product={product}/>
      <Discriptionbox/>
      <Relatedproduct/>
    </div>
  )
}
