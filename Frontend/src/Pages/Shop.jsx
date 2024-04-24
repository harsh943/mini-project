import React from 'react'
import { Hero } from '../Component/Hero/Hero'
import { NewCollections } from '../Component/NewCollections/NewCollections'
import { Newsletter } from '../Component/Newsletter/Newsletter'
import { Offers } from '../Component/Offers/Offers'
import { Popular } from '../Component/Popular/Popular'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
    </div>
  )
}
