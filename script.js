// const menuButton = document.getElementById("menu-button");
//     const menu = document.getElementById("menu");

//     menuButton.addEventListener("click", () => {
//         menu.classList.toggle("translate-x-full");
//         menu.classList.toggle("translate-x-0");
//     });

variants: {
  display: ["group-hover"];
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      padding: "2rem",
    },
    extend: {
      screens: {
        print: { raw: "print" },
        screen: { raw: "screen" },
      },
      colors: {
        primary: "#aaaaaa",
        secondary: "#3f3cbb",
        accent: "#121063",
        dark: "#112D4E",
        light: "#3ab7bf",
        "ti-dark-brown": "#785233",
        "ti-yellow-brown": "#ECBB4E",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        // 'work-sans': ['"Work Sans"', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marqueeGallery: "marquee 50s linear infinite",
      },
    },
  },
};
