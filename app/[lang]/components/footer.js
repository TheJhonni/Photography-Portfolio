"use client"
import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    // Funzione per aggiungere lo script di iubenda al documento
    const addIubendaScript = () => {
      const scriptElement = document.createElement('script');
      scriptElement.src = "https://cdn.iubenda.com/iubenda.js";
      scriptElement.type = 'text/javascript';
      document.body.appendChild(scriptElement);
    };

    // Assicurati che lo script venga caricato una volta che la pagina è completamente caricata
    if (window.addEventListener) {
      window.addEventListener("load", addIubendaScript);
    } else if (window.attachEvent) {
      window.attachEvent("onload", addIubendaScript);
    } else {
      window.onload = addIubendaScript;
    }

    // Cleanup function per rimuovere l'event listener e lo script quando il componente viene smontato
    return () => {
      window.removeEventListener("load", addIubendaScript);
      const scriptElement = document.querySelector("script[src='https://cdn.iubenda.com/iubenda.js']");
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);

  return (
    <footer className="bg-white shadow fixed bottom-0 w-full z-50">
      <div className="flex justify-center items-center">
        <a href="https://www.iubenda.com/privacy-policy/50123761" target='blank'
           className="btn text-primary px-3 py-1 bg-tertiary hover:bg-orange text-white hover:text-tertiary hover:scale-105 border border-2 border-white hover:border-orange mx-2"
           title="Privacy Policy">
          Privacy Policy
        </a>
        <a href="https://www.iubenda.com/privacy-policy/50123761/cookie-policy" target='blank'
           className="btn text-primary px-3 py-1 bg-tertiary hover:bg-orange text-white hover:text-tertiary hover:scale-105 border border-2 border-white hover:border-orange mx-2"
           title="Cookie Policy">
          Cookie Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
