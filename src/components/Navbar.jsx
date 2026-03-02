import { Link } from "react-router-dom"
import { Compass, User, Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Destinations", path: "#destinations" },
        { name: "Stay & Dine", path: "#stay-dine" },
        { name: "Booking", path: "#booking" },
        { name: "AI Planner", path: "#ai-planner" },
    ]

    return (
        <nav className="fixed w-full z-50 bg-slate-900/85 dark:bg-slate-950/85 backdrop-blur-xl shadow-2xl border-b border-white/10 dark:border-slate-800 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex items-center gap-2">
                        <Compass className="w-8 h-8 text-emerald-400" />
                        <span className="font-bold text-2xl tracking-tighter text-white">WanderPak</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="text-slate-300 hover:text-emerald-400 font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex items-center pl-4 border-l border-slate-700">
                            <ThemeToggle />
                        </div>
                        <button className="bg-emerald-500 text-white px-5 py-2 rounded-full font-medium hover:bg-emerald-600 transition-colors flex items-center gap-2 shadow-lg shadow-emerald-500/20">
                            <User className="w-4 h-4" />
                            Sign In
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-slate-300 hover:text-emerald-400 focus:outline-none">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-white/10 dark:border-slate-800"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    onClick={toggleMenu}
                                    className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="px-3 py-3 border-t border-slate-800 flex items-center justify-between">
                                <span className="text-base font-medium text-slate-300">Theme</span>
                                <ThemeToggle />
                            </div>
                            <div className="pt-4">
                                <button className="w-full bg-emerald-500 text-white px-5 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors flex justify-center items-center gap-2">
                                    <User className="w-4 h-4" />
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
