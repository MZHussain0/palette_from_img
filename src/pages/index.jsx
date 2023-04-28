import Head from "next/head";

import styles from "@/styles/Home.module.css";
import DisplayImage from "@/components/DisplayImage";
import ColorThief from "colorthief";
import { useState } from "react";

const gallery = <i className="fa fa-images"></i>;

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [colorPalette, setColorPalette] = useState(null);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const img = new Image();

      img.onload = () => {
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img, 6);

        setUploadedImage(event.target.result);
        setColorPalette(colorPalette);
      };

      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
    setColorPalette(null);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <header>
        <h1>Palette Genfi</h1>
        <div className="input">
          <label htmlFor="file">{gallery} Upload Image</label>
          <input type="file" id="file" hidden onChange={uploadImage} />
        </div>
      </header>
      <main className={styles.main}>
        <DisplayImage
          uploadedImage={uploadedImage}
          colorPalette={colorPalette}
        />
      </main>
    </>
  );
}
