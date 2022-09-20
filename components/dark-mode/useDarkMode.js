import {useEffect, useState} from "react";

export function useDarkMode() {
    function usePrefersDarkMode() {
        const [value, setValue] = useState(true)

        useEffect(() => {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
            setValue(mediaQuery.matches)

            const handler = () => setValue(mediaQuery.matches)
            mediaQuery.addEventListener('change', handler)
            return () => mediaQuery.removeEventListener('change', handler)
        }, [])

        return value
    }

    function useSafeLocalStorage(key, initialValue) {
        const [valueProxy, setValueProxy] = useState(() => {
            try {
                const value = window.localStorage.getItem(key)
                return value ? JSON.parse(value) : initialValue
            } catch {
                return initialValue
            }
        })

        const setValue = value => {
            try {
                window.localStorage.setItem(key, value)
                setValueProxy(value)
            } catch {
                setValueProxy(value)
            }
        }

        return [valueProxy, setValue]
    }

    const prefersDarkMode = usePrefersDarkMode()
    const [
        isEnabled,
        setIsEnabled] = useSafeLocalStorage('dark-mode', undefined)

    const enabled =
        isEnabled === undefined ? prefersDarkMode : isEnabled

    useEffect(() => {
        if (window === undefined) return
        const root = window.document.documentElement
        root.classList.remove(enabled ? 'light' : 'dark')
        root.classList.add(enabled ? 'dark' : 'light')
    }, [enabled])

    return [enabled, setIsEnabled]
}