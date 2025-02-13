import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Obtener el tema guardado en localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.toggle("dark-mode", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.classList.toggle("dark-mode", newTheme === "dark");
  };

  return (
    <button onClick={toggleTheme} className="toggleButton">
      {theme === "dark" ? <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24">
                                <path d="M 11 0 L 11 3 L 13 3 L 13 0 L 11 0 z M 4.2226562 2.8085938 L 2.8085938 4.2226562 L 4.9296875 6.34375 L 6.34375 4.9296875 L 4.2226562 2.8085938 z M 19.777344 2.8085938 L 17.65625 4.9296875 L 19.070312 6.34375 L 21.191406 4.2226562 L 19.777344 2.8085938 z M 12 5 C 8.1458514 5 5 8.1458514 5 12 C 5 15.854149 8.1458514 19 12 19 C 15.854149 19 19 15.854149 19 12 C 19 8.1458514 15.854149 5 12 5 z M 12 7 C 14.773268 7 17 9.2267316 17 12 C 17 14.773268 14.773268 17 12 17 C 9.2267316 17 7 14.773268 7 12 C 7 9.2267316 9.2267316 7 12 7 z M 0 11 L 0 13 L 3 13 L 3 11 L 0 11 z M 21 11 L 21 13 L 24 13 L 24 11 L 21 11 z M 4.9296875 17.65625 L 2.8085938 19.777344 L 4.2226562 21.191406 L 6.34375 19.070312 L 4.9296875 17.65625 z M 19.070312 17.65625 L 17.65625 19.070312 L 19.777344 21.191406 L 21.191406 19.777344 L 19.070312 17.65625 z M 11 21 L 11 24 L 13 24 L 13 21 L 11 21 z"></path>
                            </svg> : 
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 48 48">
                                <path d="M 24 4 C 12.972292 4 4 12.972292 4 24 C 4 35.027708 12.972292 44 24 44 C 27.983824 44 31.697341 42.818934 34.8125 40.810547 A 1.50015 1.50015 0 0 0 34.8125 38.289062 C 30.115303 35.262409 27 30.010704 27 24 C 27 17.989296 30.115303 12.737591 34.8125 9.7109375 A 1.50015 1.50015 0 0 0 34.8125 7.1894531 C 31.697341 5.1810663 27.983824 4 24 4 z M 24 7 C 26.627951 7 29.025212 7.7442617 31.242188 8.8105469 C 26.878309 12.477492 24 17.86155 24 24 C 24 30.13845 26.878309 35.522508 31.242188 39.189453 C 29.025212 40.255738 26.627951 41 24 41 C 14.593708 41 7 33.406292 7 24 C 7 14.593708 14.593708 7 24 7 z"></path>
                            </svg>}
    </button>
  );
}