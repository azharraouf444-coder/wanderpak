import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const toggleDropdown = () => setIsOpen(!isOpen)

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme)
        setIsOpen(false)
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="p-2 rounded-full text-slate-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors focus:outline-none"
                aria-label="Toggle theme"
            >
                <Sun className="h-5 w-5 dark:hidden" />
                <Moon className="h-5 w-5 hidden dark:block" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-36 rounded-xl shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 border border-slate-200 dark:border-slate-700 overflow-hidden z-50 focus:outline-none"
                    >
                        <div className="py-1">
                            <button
                                onClick={() => handleThemeChange('light')}
                                className={`w-full flex items-center px-4 py-2 text-sm ${theme === 'light' ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'} transition-colors`}
                            >
                                <Sun className="mr-3 h-4 w-4" />
                                Light
                            </button>
                            <button
                                onClick={() => handleThemeChange('dark')}
                                className={`w-full flex items-center px-4 py-2 text-sm ${theme === 'dark' ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'} transition-colors`}
                            >
                                <Moon className="mr-3 h-4 w-4" />
                                Dark
                            </button>
                            <button
                                onClick={() => handleThemeChange('system')}
                                className={`w-full flex items-center px-4 py-2 text-sm ${theme === 'system' ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'} transition-colors`}
                            >
                                <Monitor className="mr-3 h-4 w-4" />
                                System
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
