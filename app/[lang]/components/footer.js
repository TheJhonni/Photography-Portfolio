"use client";
import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // Funzione per aggiungere lo script di iubenda al documento
    const addIubendaScript = () => {
      const scriptElement = document.createElement("script");
      scriptElement.src = "https://cdn.iubenda.com/iubenda.js";
      scriptElement.type = "text/javascript";
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
      const scriptElement = document.querySelector(
        "script[src='https://cdn.iubenda.com/iubenda.js']"
      );
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);

  return (
    <footer className="fixed bottom-0 w-full z-50 text-white text-sm text-center p-2">
      <div>
        © 2016, ikbmultimedia •
        <a
          href="https://www.iubenda.com/privacy-policy/50123761"
          target="_blank"
          className="text-orange hover:underline"
        >
          Privacy Policy
        </a>{" "}
        •
        <a
          href="https://www.iubenda.com/privacy-policy/50123761/cookie-policy"
          target="_blank"
          className="text-orange hover:underline"
        >
          Cookie Policy
        </a>
        •
        <span>
          Developed by
          <a
            href="https://github.com/TheJhonni"
            target="_blank"
            className="text-orange hover:underline"
          >
            TheJhonni
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
