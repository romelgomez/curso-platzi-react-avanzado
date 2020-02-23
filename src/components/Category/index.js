import React from 'react'

const DEFAULT_IMG = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMG, path = '#', emoji = '?' }) => (
  <a href={path}>
    <img src={cover} />
    {emoji}
  </a>
)
