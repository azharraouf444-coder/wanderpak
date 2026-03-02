import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Map, Calendar, DollarSign, Bot, ArrowRight, Loader2 } from "lucide-react"

export default function AIPlanner() {
    const [budget, setBudget] = useState("")
    const [days, setDays] = useState("")
    const [isGenerating, setIsGenerating] = useState(false)
    const [itinerary, setItinerary] = useState(null)

    const handleGenerate = (e) => {
        e.preventDefault()
        setIsGenerating(true)
        setItinerary(null)

        // Simulate API delay
        setTimeout(() => {
            setIsGenerating(false)
            setItinerary({
                title: `${days} Days Trip to Neelum Valley`,
                budget: `Rs ${budget}`,
                days: [
                    { day: 1, title: "Arrival & Setup", desc: "Arrive at Muzaffarabad, travel to Keran. Check-in at Neelum Star Resort. Evening walk by the river." },
                    { day: 2, title: "Explore Sharda & Kel", desc: "Drive to Sharda, visit historical ruins. Travel to Kel via cable car, trek to Arang Kel." },
                    { day: 3, title: "Taobat & Return", desc: "Drive to the last village Taobat. Enjoy the lush green meadows. Evening return journey to Islamabad." }
                ].slice(0, parseInt(days) || 3) // dummy logic
            })
        }, 2500)
    }

    return (
        <section id="ai-planner" className="py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 relative overflow-hidden">

            {/* Decorative Stars */}
            <div className="absolute top-10 left-10 text-white/20 animate-pulse"><Sparkles className="w-12 h-12" /></div>
            <div className="absolute bottom-20 right-20 text-white/20 animate-pulse delay-700"><Sparkles className="w-16 h-16" /></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row gap-12 items-center">

                {/* Left Side: Text and Form */}
                <div className="w-full md:w-1/2 space-y-8">
                    <div>
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-sm font-medium mb-4">
                            <Bot className="w-4 h-4" /> Powered by AI
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md tracking-tight">
                            Smart Itinerary <span className="text-emerald-400">Planner</span>
                        </h2>
                        <p className="text-xl text-emerald-100/80 mb-8 max-w-lg">
                            Not sure where to start? Tell us your budget and time, and our magical AI will generate the perfect trip for you.
                        </p>
                    </div>

                    <form onSubmit={handleGenerate} className="glass p-8 rounded-3xl border border-white/20 space-y-6 relative overflow-hidden">
                        <div className="space-y-2">
                            <label className="text-emerald-100 font-semibold text-sm">What is your total budget? (PKR)</label>
                            <div className="relative">
                                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-700 w-5 h-5 z-10" />
                                <input
                                    type="number"
                                    required
                                    value={budget}
                                    onChange={(e) => setBudget(e.target.value)}
                                    placeholder="e.g. 50000"
                                    className="w-full bg-white/90 border border-white/30 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-emerald-400 focus:outline-none text-slate-800 font-bold placeholder-slate-400"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-emerald-100 font-semibold text-sm">How many days do you have?</label>
                            <div className="relative">
                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-700 w-5 h-5 z-10" />
                                <input
                                    type="number"
                                    required
                                    value={days}
                                    onChange={(e) => setDays(e.target.value)}
                                    placeholder="e.g. 3"
                                    min="1"
                                    max="14"
                                    className="w-full bg-white/90 border border-white/30 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-emerald-400 focus:outline-none text-slate-800 font-bold placeholder-slate-400"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isGenerating}
                            className="w-full mt-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 group disabled:opacity-70"
                        >
                            {isGenerating ? (
                                <> <Loader2 className="w-5 h-5 animate-spin" /> Generating Plan... </>
                            ) : (
                                <> Generate My Magic Trip <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" /> </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Right Side: Results Presentation */}
                <div className="w-full md:w-1/2 flex items-center justify-center min-h-[500px]">
                    <AnimatePresence mode="wait">

                        {!isGenerating && !itinerary && (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="text-center p-8 border-2 border-dashed border-emerald-500/30 rounded-3xl w-full"
                            >
                                <Map className="w-20 h-20 text-emerald-500/50 mx-auto mb-4" />
                                <h3 className="text-xl font-medium text-emerald-200">Your personalized roadmap will appear here</h3>
                            </motion.div>
                        )}

                        {isGenerating && (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center text-emerald-200 space-y-6"
                            >
                                <div className="relative">
                                    <div className="w-24 h-24 border-4 border-emerald-500/30 rounded-full border-t-emerald-400 animate-spin"></div>
                                    <Bot className="w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-400" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="font-medium text-lg">Analyzing best routes...</p>
                                    <p className="text-sm text-emerald-400/60">Matching accommodations with your budget</p>
                                </div>
                            </motion.div>
                        )}

                        {itinerary && !isGenerating && (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-3xl p-8 w-full shadow-2xl relative"
                            >
                                <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 font-bold px-4 py-2 rounded-xl shadow-lg transform rotate-6 border-2 border-white">
                                    Trip Ready!
                                </div>

                                <h3 className="text-2xl font-bold text-slate-800 mb-2">{itinerary.title}</h3>
                                <p className="text-emerald-600 font-semibold mb-6 flex items-center gap-1">Estimated Cost: {itinerary.budget}</p>

                                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                                    {itinerary.days.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.2 }}
                                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                                        >
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 text-slate-500 group-[.is-active]:bg-emerald-500 group-[.is-active]:text-emerald-50 group-[.is-active]:border-emerald-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">
                                                {item.day}
                                            </div>
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm ml-4 md:ml-0">
                                                <div className="flex items-center justify-between space-x-2 mb-1">
                                                    <div className="font-bold text-slate-800">Day {item.day}: {item.title}</div>
                                                </div>
                                                <div className="text-slate-500 text-sm leading-relaxed">{item.desc}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <button className="w-full mt-8 bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                                    View Full Details <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
