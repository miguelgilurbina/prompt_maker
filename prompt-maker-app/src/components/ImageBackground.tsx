import React from "react";

interface ImageBackgroundProps {
  imageUrl: string;
}

const ImageBackground: React.FC<ImageBackgroundProps> = ({ imageUrl }) => {
  const backgroundStyles: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "auto",
    backgroundPosition: "center",
    width: "1458px ",
    height: "816px",
  };
  return <div style={backgroundStyles}></div>;
};

export default ImageBackground;
