import React, { useEffect } from "react";

const Imagecard = ({ single }) => {
  const imageRef = React.createRef();
  useEffect(() => {
    console.log(imageRef);
  });
  return (
    <div>
      <>
        {single} ref={imageRef}
      </>
    </div>
  );
};

export default Imagecard;
