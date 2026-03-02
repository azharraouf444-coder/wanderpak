import { motion } from "framer-motion"
import { Wifi, Flame, Car, Star, MapPin } from "lucide-react"

const accommodations = [
    {
        id: 1,
        name: "Serena Hotel Swat",
        location: "Saidu Sharif, Swat",
        image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: "15,000",
        rating: 4.8,
        reviews: 124,
        facilities: [
            { name: "Fast Wi-Fi", icon: <Wifi className="w-4 h-4" /> },
            { name: "Heater", icon: <Flame className="w-4 h-4" /> },
            { name: "Free Parking", icon: <Car className="w-4 h-4" /> }
        ]
    },
    {
        id: 2,
        name: "Neelum Star Resort",
        location: "Keran, Neelum Valley",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1500",
        price: "8,500",
        rating: 4.5,
        reviews: 89,
        facilities: [
            { name: "Heater", icon: <Flame className="w-4 h-4" /> },
            { name: "Free Parking", icon: <Car className="w-4 h-4" /> }
        ]
    },
    {
        id: 3,
        name: "Fairy Meadows Cottages",
        location: "Fairy Meadows",
        image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80&w=1500",
        price: "6,000",
        rating: 4.9,
        reviews: 210,
        facilities: [
            { name: "Wood Heater", icon: <Flame className="w-4 h-4" /> }
        ]
    }
]

export default function StayAndDine() {
    return (
        <section id="stay-dine" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-2"
                        >
                            Comfort & Taste
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
                        >
                            Stay & Dine
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-600"
                        >
                            Find the perfect hotels, resorts, and restaurants. Enjoy top-tier comfort mixed with the authentic taste of the North.
                        </motion.p>
                    </div>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-full transition-colors hidden md:block"
                    >
                        View All Hotels
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {accommodations.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />

                                {/* Price Tag (Glassmorphism) */}
                                <div className="absolute top-4 right-4 glass px-4 py-2 rounded-xl">
                                    <span className="text-white font-bold tracking-tight">
                                        Rs {item.price} <span className="text-sm font-normal text-white/80">/ night</span>
                                    </span>
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
                                            {item.name}
                                        </h4>
                                        <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                                            <MapPin className="w-4 h-4" /> {item.location}
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-lg">
                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        <span className="font-bold text-yellow-700 text-sm">{item.rating}</span>
                                    </div>
                                </div>

                                {/* Facilities */}
                                <div className="mt-6 pt-6 border-t border-slate-200">
                                    <h5 className="text-sm font-semibold text-slate-800 mb-3">Amenities</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {item.facilities.map((fac, i) => (
                                            <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 shadow-sm">
                                                <span className="text-emerald-600">{fac.icon}</span> {fac.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full mt-8 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-lg shadow-emerald-600/20">
                                    Book Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
