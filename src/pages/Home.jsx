import Hero from "../components/Hero"
import Destinations from "../components/Destinations"
import StayAndDine from "../components/StayAndDine"
import BookingEngine from "../components/BookingEngine"
import AIPlanner from "../components/AIPlanner"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <Destinations />
            <StayAndDine />
            <BookingEngine />
            <AIPlanner />

            {/* Footer placeholder */}
            <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-12 text-center transition-colors">
                <p>&copy; 2026 WanderPak. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4 text-sm text-slate-500">
                    <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
                </div>
            </footer>
        </div>
    )
}
