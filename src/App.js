import React from 'react'
import { ListOfCaterories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyle'
import { PhotoCard } from './components/PhotoCard'

export const App = () => (
  <div>
    <GlobalStyle />
    <div>
      <ListOfCaterories />
      <PhotoCard />
    </div>
  </div>
)
