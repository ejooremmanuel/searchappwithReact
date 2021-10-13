import React, { useEffect } from "react";
import "./Image.css";

const ImageCard = ({ images }) => {
  const newimages = images.map(({ urls, id, description }, i) => {
    return (
      <img ref={React.createRef()} key={id} src={urls.full} alt={description} />
    );
  });
  useEffect(() => {
    console.log(newimages);
  });
  return <div className="image">{newimages}</div>;
};

export default ImageCard;
