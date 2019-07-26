import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"

const useDarkMode = (key, initalValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initalValue)
    useEffect( () => {
        if (localStorage.getItem("Dark Mode") === "true") {
            document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove("dark-mode")
            console.log(false)
        }
    },[setDarkMode])

    
    return [darkMode, setDarkMode]
}

export default useDarkMode;
