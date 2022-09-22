import {useDarkMode} from "./useDarkMode";
import React from "react";

export default function DarkModeToggle (){
    const [isDark, setIsDark] = useDarkMode()

    return (
        <label>
            <button onClick={ () => setIsDark(!isDark)} className="flex justify-center items-center">
                <img className={'object-contain w-5 dark:invert'} src={'/darkMode.png'} alt={'Dark Mode'}/>
            </button>
        </label>
    )
}