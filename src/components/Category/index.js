import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMG = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMG, path = '#', emoji = '?' }) => (
  <Anchor className={Anchor} href={path}>
    <Image className={Image} src={cover} />
    {emoji}
  </Anchor>
)
