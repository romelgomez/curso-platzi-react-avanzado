import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import {
  List,
  Item
} from './styles'
import { categories as categoriesMock } from '../../../api/db.json'

export const ListOfCaterories = () => {
  const [categories, setCategories] = useState(categoriesMock)

  useEffect(() => {
    window.fetch('https://petgram-server-romelgomez.now.sh/categories')
      .then(res => res.json())
      .then(res => {
        setCategories(res)
      })
  }, [])

  const renderList = (fixed = false) => (
    <List className={fixed ? 'fixed' : ''}>
      {categories.map(category => <Item key={category.id}><Category {...category} /></Item>)}
    </List>
  )

  return (
    <fragment>
      {renderList(true)}
      {renderList()}
    </fragment>
  )
}
