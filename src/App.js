import React from 'react'
import { ListOfCaterories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyle'
// import { PhotoCard } from './components/PhotoCard'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'

export const App = () => (
  <div>
    <GlobalStyle />
    <div>
      <ListOfCaterories />
      <ListOfPhotoCard />
    </div>
  </div>
)
