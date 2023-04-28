import React from "react";
import styles from "@/styles/Home.module.css";
import ListItem from "./ListItem";

const DisplayImage = ({ uploadedImage, colorPalette }) => {
  //write a function to convert rgb values to hex

  const toHex = (rgb) => {
    const hex = Number(rgb).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return (
    <div className={styles.content}>
      <div className="image">
        {uploadedImage ? (
          <img src={uploadedImage} alt="uploaded" />
        ) : (
          <h2>Put an image here...</h2>
        )}
      </div>

      {colorPalette && (
        <ul className={styles.colors}>
          {colorPalette.map((color) => {
            const rgb = `rgb(${color.join(",")})`;
            const hex = `#${toHex(color[0])}${toHex(color[1])}${toHex(
              color[2]
            )}`;
            console.log(hex);
            return <ListItem rgb={rgb} hex={hex} key={color} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default DisplayImage;
