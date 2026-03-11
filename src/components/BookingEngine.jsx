import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Building2, Car as CarIcon, CreditCard, Calendar, Users, MapPin } from "lucide-react"

export default function BookingEngine() {
    const [activeTab, setActiveTab] = useState("hotel")
    const [destination, setDestination] = useState("")
    const navigate = useNavigate()

    const tabs = [
        { id: "hotel", label: "Hotel Booking", icon: <Building2 className="w-5 h-5" /> },
        { id: "vehicle", label: "Vehicle Rental", icon: <CarIcon className="w-5 h-5" /> },
        { id: "payment", label: "Checkout", icon: <CreditCard className="w-5 h-5" /> }
    ]

    return (
        <section id="booking" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/30 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100 dark:bg-sky-900/30 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2 transition-colors"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-2"
                    >
                        Plan Your Trip
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 transition-colors"
                    >
                        Booking Engine
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-slate-400 transition-colors"
                    >
                        Book your stay, rent a vehicle, and securely pay in one place.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-slate-950 rounded-3xl shadow-xl dark:shadow-emerald-900/10 border border-slate-100 dark:border-slate-800 overflow-hidden relative transition-colors"
                >
                    {/* Tabs */}
                    <div className="flex border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 transition-colors">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-300 relative ${activeTab === tab.id ? "text-emerald-600 dark:text-emerald-400 bg-white dark:bg-slate-950" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-slate-800/50"}`}
                            >
                                {tab.icon} <span className="hidden sm:inline">{tab.label}</span>
                                {activeTab === tab.id && (
                                    <motion.div layoutId="activeTabIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-6 md:p-10 min-h-[400px]">
                        <AnimatePresence mode="wait">

                            {/* Hotel Tab */}
                            {activeTab === "hotel" && (
                                <motion.div
                                    key="hotel"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors ml-1">Destination</label>
                                            <div className="relative">
                                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                                <select
                                                    value={destination}
                                                    onChange={(e) => setDestination(e.target.value)}
                                                    className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white transition-colors rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none appearance-none cursor-pointer"
                                                >
                                                    <option value="">Select Destination</option>
                                                    <option value="swat">Swat Valley, KP</option>
                                                    <option value="kalam">Kalam Valley, KP</option>
                                                    <option value="neelum-valley">Neelum Valley, AJK</option>
                                                    <option value="naran">Naran Kaghan, KP</option>
                                                    <option value="hunza">Hunza, GB</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors ml-1">Check In - Check Out</label>
                                            <div className="relative flex gap-2">
                                                <div className="relative flex-1">
                                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                                                    <input type="date" className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white transition-colors rounded-xl py-3 pl-10 pr-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none cursor-pointer" />
                                                </div>
                                                <div className="relative flex-1">
                                                    <input type="date" className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white transition-colors rounded-xl py-3 px-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none cursor-pointer" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors ml-1">Guests & Rooms</label>
                                            <div className="relative">
                                                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                                                <select className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white transition-colors rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none appearance-none cursor-pointer">
                                                    <option>2 Adults, 1 Room</option>
                                                    <option>1 Adult, 1 Room</option>
                                                    <option>3 Adults, 1 Room</option>
                                                    <option>4 Adults, 2 Rooms</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => {
                                            if (destination) {
                                                navigate(`/destination/${destination}`)
                                            } else {
                                                alert("Please select a destination first.")
                                            }
                                        }}
                                        className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2"
                                    >
                                        <Building2 className="w-5 h-5" /> Search Hotels
                                    </button>
                                </motion.div>
                            )}

                            {/* Vehicle Tab */}
                            {activeTab === "vehicle" && (
                                <motion.div
                                    key="vehicle"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors ml-1">Pick Up Location</label>
                                            <div className="relative">
                                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                                <input type="text" placeholder="e.g. Islamabad Airport" className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white transition-colors rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors ml-1">Vehicle Type</label>
                                            <div className="relative">
                                                <CarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                                                <select className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white transition-colors rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none appearance-none cursor-pointer">
                                                    <option value="">Select Type</option>
                                                    <option value="jeep">4x4 Jeep (For Off-road)</option>
                                                    <option value="hiace">Toyota Hiace (For Groups)</option>
                                                    <option value="car">Sedan Car (Standard)</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors ml-1">Pickup Date & Time</label>
                                            <div className="relative flex gap-2">
                                                <div className="relative flex-1">
                                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                                                    <input type="date" className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white transition-colors rounded-xl py-3 pl-10 pr-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none cursor-pointer" />
                                                </div>
                                                <div className="relative flex-1">
                                                    <input type="time" className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white transition-colors rounded-xl py-3 px-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none cursor-pointer" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="w-full mt-8 bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-sky-600/30 flex items-center justify-center gap-2">
                                        <CarIcon className="w-5 h-5" /> Find Vehicles
                                    </button>
                                </motion.div>
                            )}

                            {/* Payment Tab */}
                            {activeTab === "payment" && (
                                <motion.div
                                    key="payment"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-8"
                                >
                                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex justify-between items-center shadow-inner">
                                        <div className="space-y-1">
                                            <p className="text-slate-500 text-sm font-medium">Total Amount</p>
                                            <h4 className="text-3xl font-bold text-slate-900">Rs 25,500</h4>
                                        </div>
                                        <div className="text-right text-sm text-slate-500">
                                            <p>Booking #WP-4021</p>
                                            <p>2 Items</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors ml-1">Select Payment Method</label>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                                            {/* Dummy Pay Methods */}
                                            <div className="border border-emerald-500 bg-emerald-50/50 rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors relative overflow-hidden">
                                                <div className="absolute top-2 right-2 w-4 h-4 rounded-full border-4 border-emerald-500 bg-white"></div>
                                                <CreditCard className="w-8 h-8 text-emerald-600" />
                                                <span className="font-semibold text-emerald-900 text-sm">Credit Card</span>
                                            </div>

                                            <div className="border border-slate-200 hover:border-emerald-300 rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all">
                                                <div className="w-8 h-8 bg-[#EF4444] rounded text-white flex items-center justify-center font-bold text-xs">JCash</div>
                                                <span className="font-medium text-slate-700 dark:text-slate-300 transition-colors text-sm">JazzCash</span>
                                            </div>

                                            <div className="border border-slate-200 hover:border-emerald-300 rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all">
                                                <div className="w-8 h-8 bg-[#22C55E] rounded text-white flex items-center justify-center font-bold text-xs text-center leading-tight">Easy<br />Paisa</div>
                                                <span className="font-medium text-slate-700 dark:text-slate-300 transition-colors text-sm">Easypaisa</span>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="space-y-4 pt-4 border-t border-slate-100">
                                        <div className="relative">
                                            <input type="text" placeholder="Card Number (Dummy Form)" className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white transition-colors rounded-xl py-3 px-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none font-mono tracking-widest text-sm" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <input type="text" placeholder="MM/YY" className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white transition-colors rounded-xl py-3 px-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                                            <input type="text" placeholder="CVC" className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white transition-colors rounded-xl py-3 px-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none" />
                                        </div>
                                    </div>

                                    <button className="w-full mt-4 bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-xl transition-colors shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2">
                                        Pay Securely
                                    </button>
                                </motion.div>
                            )}

                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
