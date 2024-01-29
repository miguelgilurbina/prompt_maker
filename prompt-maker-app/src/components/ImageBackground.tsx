import React from "react";

interface ImageBackgroundProps {
  imageUrl: string;
}

const ImageBackground: React.FC<ImageBackgroundProps> = ({ imageUrl }) => {
  const backgroundStyles: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: "Center",
    //Encontrar forma de que sea más responsivo, investigar sobre cómo alterar el estilo en React con Typescript
    width: "1920px",
    height: "903px",
  };
  return <div style={backgroundStyles}></div>;
};

export default ImageBackground;
