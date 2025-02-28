"use client";
import React from "react";

const images = [
  "/images/image1.jpg",  // Remplace ces chemins par les images que tu veux afficher
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
];

const ScrollingMenu = () => {
  return (
    <div className="scrollWrapper">
      <div className="scrollMenu">
        {images.map((src, index) => (
          <div className="menuItem" key={index}>
            <img src={src} alt={`Image ${index + 1}`} className="image" />
          </div>
        ))}
        {/* Duplique les éléments pour un défilement infini */}
        {images.map((src, index) => (
          <div className="menuItem" key={index + images.length}>
            <img src={src} alt={`Image ${index + 1}`} className="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingMenu;
