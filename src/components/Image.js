import React from "react";
import "./Image.css";

const ImageCard = ({ images }) => {
  const newimages = images.map(({ urls, id, description }, i) => {
    return <img key={id} src={urls.full} alt={description} />;
  });
  return <div className="image">{newimages}</div>;
};

export default ImageCard;
