import React from 'react'
import { Category } from '../Category'
import {
  List,
  Item
} from './styles'

export const ListOfCaterories = () => {
  return (
    <List>
      {[1, 2, 3, 4].map(category => <Item key={category}><Category /></Item>)}
    </List>
  )
}
