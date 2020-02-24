import React from 'react'
import { ListOfCaterories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyle'

export const App = () => (
  <div>
    <GlobalStyle />
    <div>
      <ListOfCaterories />
    </div>
  </div>
)
