import { useEffect } from 'react'

import { useLocalStorage } from '../../utils/useLocalStorage'
import { detectThemeMode } from '../../utils/detectThemeMode'

import sun from '../../img/icons/sun.svg'
import moon from '../../img/icons/moon.svg'

import './BtnThemeMode.css'


export default function BtnThemeMode() {
    const [themeMode, setThemeMode] = useLocalStorage(
        'themeMode', detectThemeMode()
    )
    
    useEffect(() => {
        if(themeMode === 'dark') {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [themeMode])
    
    const toggleThemeMode = () => {
        setThemeMode((currentTheme) => {
            return currentTheme === 'light' ? 'dark' : 'light'
        })
    }

    const btnLight = 'theme-mode-btn'
    const btnDark = 'theme-mode-btn theme-mode-btn--dark'
    
    return (
        <button 
            className={ themeMode === 'light' ? btnLight : btnDark } 
            onClick={ toggleThemeMode }
        >
            <img src={ sun } alt="Light mode" className="theme-mode-btn__icon" />
            <img src={ moon } alt="Dark mode" className="theme-mode-btn__icon" />
        </button>
    )
}