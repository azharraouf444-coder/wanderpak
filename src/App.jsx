import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import DestinationDetail from "./pages/DestinationDetail"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination/:id" element={<DestinationDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
