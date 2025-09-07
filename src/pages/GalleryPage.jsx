import React, { useState, useEffect } from "react";
import Masonry from "../components/Masonry";
import { galleryImgs } from "../assets/gallery-pictures/galleryImgs";
import Loader from "../components/Loader";

const GalleryPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [loading, setLoading] = useState(true);

  const items = [
    { id: "1", img: galleryImgs[0], height: 450 },
    { id: "2", img: galleryImgs[1], height: 350 },
    { id: "3", img: galleryImgs[2], height: 600 },
    { id: "4", img: galleryImgs[3], height: 550 },
    { id: "5", img: galleryImgs[4], height: 500 },
    { id: "6", img: galleryImgs[5], height: 300 },
    { id: "7", img: galleryImgs[6], height: 450 },
    { id: "8", img: galleryImgs[7], height: 400 },
    { id: "9", img: galleryImgs[8], height: 350 },
    { id: "10", img: galleryImgs[9], height: 600 },
    { id: "11", img: galleryImgs[10], height: 350 },
    { id: "12", img: galleryImgs[11], height: 500 },
    { id: "13", img: galleryImgs[12], height: 300 },
    { id: "14", img: galleryImgs[13], height: 450 },
    { id: "15", img: galleryImgs[14], height: 400 },
    { id: "16", img: galleryImgs[15], height: 450 },
    { id: "17", img: galleryImgs[16], height: 500 },
    { id: "18", img: galleryImgs[17], height: 350 },
    { id: "19", img: galleryImgs[18], height: 500 },
    { id: "20", img: galleryImgs[19], height: 300 },
    { id: "21", img: galleryImgs[20], height: 450 },
    { id: "22", img: galleryImgs[21], height: 400 },
    { id: "23", img: galleryImgs[22], height: 350 },
    { id: "24", img: galleryImgs[23], height: 600 },
    { id: "25", img: galleryImgs[24], height: 850 },
    { id: "26", img: galleryImgs[25], height: 500 },
    { id: "27", img: galleryImgs[26], height: 700 },
    { id: "28", img: galleryImgs[27], height: 850 },
    { id: "29", img: galleryImgs[28], height: 750 },
    { id: "30", img: galleryImgs[29], height: 250 },
    { id: "31", img: galleryImgs[30], height: 300 },
    { id: "32", img: galleryImgs[31], height: 350 },
    { id: "33", img: galleryImgs[32], height: 500 },
    { id: "34", img: galleryImgs[33], height: 900 },
    { id: "35", img: galleryImgs[34], height: 450 },
    { id: "36", img: galleryImgs[35], height: 400 },
    { id: "37", img: galleryImgs[36], height: 650 },
    { id: "38", img: galleryImgs[37], height: 600 },
    { id: "39", img: galleryImgs[38], height: 350 },
    { id: "40", img: galleryImgs[39], height: 500 },
    { id: "41", img: galleryImgs[40], height: 700 },
    { id: "42", img: galleryImgs[41], height: 450 },
    { id: "43", img: galleryImgs[42], height: 400 },
    { id: "44", img: galleryImgs[43], height: 950 },
    { id: "45", img: galleryImgs[44], height: 600 },
    { id: "46", img: galleryImgs[45], height: 350 },
    { id: "47", img: galleryImgs[46], height: 500 },
    { id: "48", img: galleryImgs[47], height: 300 },
    { id: "49", img: galleryImgs[48], height: 450 },
    { id: "50", img: galleryImgs[49], height: 400 },
    { id: "51", img: galleryImgs[50], height: 650 },
    { id: "52", img: galleryImgs[51], height: 800 },
    { id: "53", img: galleryImgs[52], height: 450 },
    { id: "54", img: galleryImgs[53], height: 500 },
    { id: "55", img: galleryImgs[54], height: 900 },
    { id: "56", img: galleryImgs[55], height: 450 },
    { id: "57", img: galleryImgs[56], height: 600 },
    { id: "58", img: galleryImgs[57], height: 750 },
    { id: "59", img: galleryImgs[58], height: 600 },
    { id: "60", img: galleryImgs[59], height: 850 },
    { id: "61", img: galleryImgs[60], height: 700 },
    { id: "62", img: galleryImgs[61], height: 700 },
    { id: "63", img: galleryImgs[62], height: 650 },
    { id: "64", img: galleryImgs[63], height: 800 },
    { id: "65", img: galleryImgs[64], height: 450 },
    { id: "66", img: galleryImgs[65], height: 700 },
    { id: "67", img: galleryImgs[66], height: 350 },
    { id: "68", img: galleryImgs[67], height: 800 },
    { id: "69", img: galleryImgs[68], height: 700 },
    { id: "70", img: galleryImgs[69], height: 250 },
    { id: "71", img: galleryImgs[70], height: 400 },
    { id: "72", img: galleryImgs[71], height: 650 },
  ];

  useEffect(() => {
    let loaded = 0;
    items.forEach((item) => {
      const img = new Image();
      img.src = item.img;
      img.onload = () => {
        loaded++;
        if (loaded === items.length) {
          setLoading(false); 
        }
      };
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
            onImageClick={(img) => setSelectedImg(img)}
          />

          {selectedImg && (
            <div
              className="fixed inset-0 bg-[var(--maroon-color)]/30 backdrop-blur-2xl flex justify-center items-center z-50"
              onClick={() => setSelectedImg(null)}
            >
              <img
                src={selectedImg}
                alt="Preview"
                className="max-h-[70%] max-w-[70%] rounded-2xl shadow-lg"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default GalleryPage;
