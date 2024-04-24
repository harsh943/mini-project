import React from 'react'
import './breadcrum.css'
import arro_icon from '../Assets/breadcrum_arrow.png'

export const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arro_icon} alt="" /> SHOP <img src={arro_icon} alt="" /> {product.category} <img src={arro_icon} alt="" /> {product.name} 
    </div>
  )
}
