import { motion } from "framer-motion"
import { ArrowRight, MapPin, CloudSun, Navigation } from "lucide-react"
import { Link } from "react-router-dom"

const destinations = [
    {
        id: "swat",
        name: "Swat Valley",
        title: "The Switzerland of the East",
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=1500",
        description: "Famous for its stunning landscapes, lush green meadows, and clear rivers. A perfect getaway for nature lovers.",
        features: ["Lush Green Meadows", "Malam Jabba Ski Resort", "Kalam Valley"],
    },
    {
        id: "neelum-valley",
        name: "Neelum Valley",
        title: "Heaven on Earth",
        image: "https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "A bow-shaped valley in Kashmir with majestic pine trees, sparkling streams, and panoramic mountain views.",
        features: ["Arang Kel", "Taobat", "Ratti Gali Lake"],
    },
    {
        id: "fairy-meadows",
        name: "Fairy Meadows",
        title: "Base of the Killer Mountain",
        image: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Offering magnificent views of Nanga Parbat, Fairy Meadows is accessible via a thrilling jeep track and trek.",
        features: ["Nanga Parbat View", "Trekking", "Camping"],
    }
]

export default function Destinations() {
    return (
        <section id="destinations" className="py-24 bg-slate-50 dark:bg-slate-900 relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-2"
                    >
                        Explore Pakistan
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 transition-colors"
                    >
                        Popular Destinations
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors"
                    >
                        Discover the most breathtaking valleys, historical sites, and majestic peaks of the North.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-12 sm:gap-24">
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={dest.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}
                        >
                            {/* Image with Parallax & Glassmorphism overlay */}
                            <div className="w-full lg:w-1/2 relative group rounded-3xl overflow-hidden shadow-2xl">
                                <div className="aspect-[4/3] w-full overflow-hidden">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.7 }}
                                        src={dest.image}
                                        alt={dest.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Glassmorphism Info Card Over Image */}
                                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:w-3/4">
                                    <div className="glass rounded-2xl p-4 sm:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center gap-2 text-white mb-2">
                                            <MapPin className="w-4 h-4 text-emerald-400" />
                                            <span className="font-medium text-sm drop-shadow-md">{dest.title}</span>
                                        </div>
                                        <h4 className="text-2xl font-bold text-white drop-shadow-lg mb-2">{dest.name}</h4>
                                        <div className="flex items-center gap-4 text-white/90 text-sm mt-3">
                                            <span className="flex items-center gap-1"><CloudSun className="w-4 h-4" /> 15°C - 25°C</span>
                                            <span className="flex items-center gap-1"><Navigation className="w-4 h-4" /> North Pk</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                <h4 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-4 transition-colors">{dest.name}</h4>
                                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed transition-colors">
                                    {dest.description}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {dest.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                            <span className="font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <motion.div whileHover={{ x: 10 }}>
                                    <Link
                                        to={`/destination/${dest.id}`}
                                        className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 text-lg transition-colors"
                                    >
                                        Explore Complete Guide <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
