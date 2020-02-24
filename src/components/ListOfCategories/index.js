import React from 'react'
import { Category } from '../Category'
import {
  List,
  Item
} from './styles'
import { categories } from '../../../api/db.json'

export const ListOfCaterories = () => {
  return (
    <List>
      {categories.map(category => <Item key={category.key}><Category {...category} /></Item>)}
    </List>
  )
}
