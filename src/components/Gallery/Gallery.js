import React from 'react'
import './Gallery.scss'
import GalleryItem from '../GalleryItem/GalleryItem'
import data from '../../../src/data'

const Gallery = () => {
  return (
    <>
      <div className="gallery__inner">
        {data.map((item) => {
          
          return <GalleryItem {...item} key={item.id}/>;
        })}
      </div>
    </>
  );
}

export default Gallery