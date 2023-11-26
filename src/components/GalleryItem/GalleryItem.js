import React from 'react'
import './GalleryItem.scss'


const GalleryItem = ({ id, title, technologies, img, url }) => {
  const [disable, setDesible] = React.useState(true)
  return (
    <div
      className="gallery__item"
      onMouseEnter={() => setDesible(false)}
      onMouseLeave={() => setDesible(true)}>
      <img src={img} alt="" className="gallery__item-bg" />
      <div className={`gallery__item-content ${disable && 'disable'}`}>
        <div className="gallery__item-title">{title}</div>
        <div className="gallery__item-desc">{technologies}</div>
        <div className="gallery__item-btn">Demo previe</div>
      </div>
      <a href={url} className="gallery__item-link" />
    </div>
  );
};

export default GalleryItem