import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import {
  List,
  Item
} from './styles'
import { categories as categoriesMock } from '../../../api/db.json'

export const ListOfCaterories = () => {
  const [categories, setCategories] = useState(categoriesMock)
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    window.fetch('https://petgram-server-romelgomez.now.sh/categories')
      .then(res => res.json())
      .then(res => {
        setCategories(res)
      })
  }, [])

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed = false) => (
    <List className={fixed ? 'fixed' : ''}>
      {categories.map(category => <Item key={category.id}><Category {...category} /></Item>)}
    </List>
  )

  return (
    <div>
      {renderList()}
      {showFixed && renderList(true)}
    </div>
  )
}
