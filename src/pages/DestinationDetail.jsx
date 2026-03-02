import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Map, Cloud, Thermometer, MapPin } from "lucide-react"

// Dummy data for destinations
const destinationDetails = {
    swat: {
        name: "Swat Valley",
        heroImage: "https://images.unsplash.com/photo-1627896157734-4d8b9ba5dbde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        history: "Known as the Switzerland of the East, Swat is a valley and an administrative district in the Khyber Pakhtunkhwa Province of Pakistan. It is the upper valley of the Swat River, which rises in the Hindu Kush range. The capital of Swat is Saidu Sharif, but the main town in the Swat valley is Mingora.",
        temperature: "18°C",
        weather: "Partly Cloudy",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1679069.9483321523!2d71.49257615655554!3d35.158309199346614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9e6e08dd13ddb%3A0xcb135bffeebef521!2sSwat%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
    },
    "neelum-valley": {
        name: "Neelum Valley",
        heroImage: "https://images.unsplash.com/photo-1596484552993-8c467a92adab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        history: "Neelum is a district of Azad Kashmir, Pakistan. It is the northernmost of 10 districts within the Pakistani-administered territory of Azad Kashmir. Taking up the larger part of the Neelam Valley, the district has a population of around 191,000.",
        temperature: "14°C",
        weather: "Sunny",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.9691851212876!2d73.8378828751307!3d34.0189032731693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e67afdc0b1f8eb%3A0xc6cb5a305fe88c2b!2sNeelum%20Valley%20Road%2C%20Muzaffarabad%2C%20Azad%20Jammu%20and%20Kashmir%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
    },
    "fairy-meadows": {
        name: "Fairy Meadows",
        heroImage: "https://images.unsplash.com/photo-1601614741362-e64fc5c8f8c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        history: "Fairy Meadows, named by German climbers and locally known as Joot, is a grassland near one of the base camp sites of the Nanga Parbat, located in Diamer District, Gilgit-Baltistan, Pakistan. At an altitude of about 3,300 meters above sea level, it serves as the launching point for trekkers summiting on the Raikot face of the Nanga Parbat.",
        temperature: "8°C",
        weather: "Clear",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3206.5925000551067!2d74.58284687522509!3d35.38573987268393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e612df1dd29add%3A0x6bfe76e93e24aa46!2sFairy%20Meadows%20National%20Park!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
    }
}

export default function DestinationDetail() {
    const { id } = useParams()
    const dest = destinationDetails[id]

    if (!dest) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 transition-colors">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4 transition-colors">Destination not found</h2>
                    <Link to="/" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors">
                        Return to Home
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 transition-colors">
            {/* Hero Header */}
            <div className="relative h-[60vh] w-full">
                <div className="absolute inset-0">
                    <img
                        src={dest.heroImage}
                        alt={dest.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <div className="w-full max-w-5xl mx-auto flex justify-start mb-8 z-10">
                        <Link to="/" className="glass text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/30 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back
                        </Link>
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white text-center drop-shadow-xl"
                    >
                        {dest.name}
                    </motion.h1>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
                {/* Info Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Weather Widget */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl dark:shadow-emerald-900/10 p-8 border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center transition-colors"
                    >
                        <div className="w-16 h-16 bg-sky-100 dark:bg-sky-900/30 text-sky-500 dark:text-sky-400 rounded-full flex items-center justify-center mb-4 transition-colors">
                            <Cloud className="w-8 h-8" />
                        </div>
                        <h3 className="text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider text-sm mb-1 transition-colors">Weather</h3>
                        <p className="text-2xl font-bold text-slate-800 dark:text-slate-100 transition-colors">{dest.weather}</p>
                    </motion.div>

                    {/* Temperature Widget */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl dark:shadow-emerald-900/10 p-8 border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center transition-colors"
                    >
                        <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 text-orange-500 dark:text-orange-400 rounded-full flex items-center justify-center mb-4 transition-colors">
                            <Thermometer className="w-8 h-8" />
                        </div>
                        <h3 className="text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider text-sm mb-1 transition-colors">Temperature</h3>
                        <p className="text-2xl font-bold text-slate-800 dark:text-slate-100 transition-colors">{dest.temperature}</p>
                    </motion.div>

                    {/* Location Widget */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl dark:shadow-emerald-900/10 p-8 border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center transition-colors"
                    >
                        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 dark:text-emerald-400 rounded-full flex items-center justify-center mb-4 transition-colors">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <h3 className="text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider text-sm mb-1 transition-colors">Location</h3>
                        <p className="text-2xl font-bold text-slate-800 dark:text-slate-100 transition-colors">North Pakistan</p>
                    </motion.div>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* History / Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100 dark:border-slate-800 transition-colors"
                    >
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 transition-colors">
                            <Map className="text-emerald-500" /> Discover {dest.name}
                        </h3>
                        <div className="prose prose-slate prose-emerald dark:prose-invert text-slate-600 dark:text-slate-300 leading-loose text-lg transition-colors">
                            <p>{dest.history}</p>
                        </div>
                    </motion.div>

                    {/* Google Maps Embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-slate-200 rounded-3xl overflow-hidden shadow-lg h-96 lg:h-auto min-h-[400px]"
                    >
                        <iframe
                            src={dest.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                        ></iframe>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}
