import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"

const useDarkMode = (key, initalValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initalValue)
    useEffect( () => {
        if (darkMode === true) {
            document.querySelector("body").classList.add("dark-mode")
        } else {
            document.querySelector('body').classList.remove("dark-mode")
            console.log(false)
        }
    })

    
    return [key, setDarkMode]
}

export default useDarkMode;
