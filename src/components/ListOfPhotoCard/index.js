import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { photos } from '../../../api/db.json'

export const ListOfPhotoCard = () => {
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}
