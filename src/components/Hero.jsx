import { useState } from "react"
import { motion } from "framer-motion"
import { Search, MapPin, Calendar, Users } from "lucide-react"

export default function Hero() {
    const [activeTab, setActiveTab] = useState("places")

    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105"
                >
                    {/* Using a placeholder mountain/nature video */}
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-beautiful-mountain-landscape-in-winter-41604-large.mp4" type="video/mp4" />
                </video>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-sm font-medium tracking-wide shadow-lg mb-6 inline-block">
                        Discover the beauty of Pakistan
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-xl font-sans">
                        Where do you <br className="hidden md:block" />
                        <span className="text-emerald-400">want to go?</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-12 drop-shadow-md">
                        Explore breathtaking valleys, historical sites, and the majestic peaks of the North. Your next adventure starts here.
                    </p>
                </motion.div>

                {/* Search Bar / Booking Widget */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-4xl"
                >
                    {/* Tabs */}
                    <div className="flex justify-center mb-0">
                        <div className="flex space-x-2 bg-slate-900/60 backdrop-blur-xl p-2 rounded-t-2xl border-t border-l border-r border-white/10 shadow-lg">
                            <button
                                onClick={() => setActiveTab("places")}
                                className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${activeTab === "places" ? "bg-emerald-500 text-white shadow-md" : "text-slate-300 hover:text-white"}`}
                            >
                                Places
                            </button>
                            <button
                                onClick={() => setActiveTab("hotels")}
                                className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${activeTab === "hotels" ? "bg-emerald-500 text-white shadow-md" : "text-slate-300 hover:text-white"}`}
                            >
                                Hotels
                            </button>
                        </div>
                    </div>

                    {/* Search Content */}
                    <div className="bg-slate-900/80 backdrop-blur-2xl rounded-2xl rounded-t-none md:rounded-tr-2xl shadow-2xl p-4 md:p-6 flex flex-col md:flex-row gap-4 items-center border border-white/10">

                        {/* Location Input */}
                        <div className="flex-1 w-full max-w-full relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search destinations (e.g. Swat, Hunza...)"
                                className="w-full pl-12 pr-4 py-4 bg-slate-800/60 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-slate-800 transition-all text-white placeholder-slate-400 font-medium"
                            />
                        </div>

                        {/* Date Input */}
                        <div className="w-full md:w-auto relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="Select Dates"
                                className="w-full md:w-48 pl-12 pr-4 py-4 bg-slate-800/60 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-slate-800 transition-all text-white placeholder-slate-400 font-medium cursor-pointer"
                                onFocus={(e) => e.target.type = 'date'}
                                onBlur={(e) => {
                                    if (!e.target.value) e.target.type = 'text';
                                }}
                            />
                        </div>

                        {/* Guests Input */}
                        <div className="w-full md:w-auto relative group hidden sm:block">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400">
                                <Users className="w-5 h-5" />
                            </div>
                            <select className="w-full md:w-40 pl-12 pr-4 py-4 bg-slate-800/60 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-slate-800 transition-all text-slate-200 font-medium appearance-none cursor-pointer">
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guests</option>
                                <option value="3">3 Guests</option>
                                <option value="4+">4+ Guests</option>
                            </select>
                        </div>

                        {/* Search Button */}
                        <button className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                            <Search className="w-5 h-5" />
                            <span className="md:hidden">Search</span>
                        </button>

                    </div>
                </motion.div>
            </div>

            {/* Down Arrow Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
                >
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                </motion.div>
            </motion.div>
        </div>
    )
}
