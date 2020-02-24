import React from 'react'
import { ListOfCaterories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyle'

export const App = () => (
  <div>
    <GlobalStyle />
    <h2>Seguimos con el curso avansado</h2>
    <div>
      <ListOfCaterories />
    </div>
  </div>
)
