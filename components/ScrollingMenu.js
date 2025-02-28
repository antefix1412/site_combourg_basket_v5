"use client";
import { useEffect, useRef } from "react";

const ScrollingMenu = () => {
  const menuRef = useRef(null);
  let position = 0;
  const speed = 0.2; // Ajuste la vitesse ici

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    // Duplique les éléments pour un effet de boucle
    menu.innerHTML += menu.innerHTML;

    // Ajuste la largeur du menu pour éviter les coupures
    menu.style.width = `${menu.scrollWidth / 2}rem`;

    // Fonction de défilement
    const scrollMenu = () => {
      position -= speed;
      if (position <= -menu.scrollWidth / 2) {
        position = 0;
      }
      menu.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(scrollMenu);
    };

    requestAnimationFrame(scrollMenu);
  }, []);

  return (
    <div className="relative overflow-hidden w-[90vw] h-[50px] bg-#333">
      <div ref={menuRef} className="absolute flex gap-4 whitespace-nowrap">
        <span className="px-4 py-2 bg-rgb(42, 67, 99)-300 rounded">Accueil</span>
        <span className="px-4 py-2 bg-rgb(42, 67, 99)-300 rounded">Services</span>
        <span className="px-4 py-2 bg-rgb(42, 67, 99)-300 rounded">Portfolio</span>
        <span className="px-4 py-2 bg-rgb(42, 67, 99)-300 rounded">Contact</span>
        <span className="px-4 py-2 bg-rgb(42, 67, 99)-300 rounded">À propos</span>
      </div>
    </div>
  );
};

export default ScrollingMenu;
