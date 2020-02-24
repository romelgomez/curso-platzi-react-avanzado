import React from 'react'
import { ListOfCaterories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyle'
// import { PhotoCard } from './components/PhotoCard'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { Logo } from './components/Logo'

export const App = () => (
  <div>
    <Logo />
    <GlobalStyle />
    <div>
      <ListOfCaterories />
      <ListOfPhotoCard />
    </div>
  </div>
)
