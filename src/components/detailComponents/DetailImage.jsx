import React from 'react'

const DetailImage = ({ image, title }) => {

  return (
    <div 
    className="bckgrnd-img"
    style={{
      background: `linear-gradient(
        190deg,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)),
        url(${image})`,
      backgroundSize: "cover",
    }}
  >
    <div className="ad-container2">
      <h3 className="ad-h3 new-recipe"></h3>
      <h1 className="pinapple-salmon">{title}</h1>
    </div>
  </div>
  )
}

export default DetailImage