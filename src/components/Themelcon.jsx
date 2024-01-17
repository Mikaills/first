import { useContext, useState } from "react"
import { darkTheme, lightTheme } from "./icons";
import { ThemeContext } from "../Context/ThemeContext";



function Themelcon(props) {
  const [theme, setTheme] = useState("light");
  const {themeName} = useContext(ThemeContext)
  console.log(themeName)
  
  function handleTheme() {
    setTheme((prev) => {
      const themeInfo = prev === "light" ? "dark" : "light";
      document.documentElement.setAttribute('data-bs-theme', themeInfo);
      return themeInfo;
    });
  }

  return (
    <>
      {
      theme === "light" ? 
        <button onClick={handleTheme} className="btn"> {lightTheme} Light</button>
       : (
        <button onClick={handleTheme} className="btn"> {darkTheme} Dark </button>
      )}
    </>
  );
}

export default Themelcon;
