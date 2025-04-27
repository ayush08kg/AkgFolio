import { useState, useEffect } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import { getConfigData } from "./data/configReader";
import Social from "./components/Social";
import Footer from "./components/Footer";
import SiteRoutes from "./routes/SiteRoutes";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const configData = getConfigData();

  useEffect(() => {
    // Simulate loading time (remove this in production or adjust as needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Navbar />
      <div className="pt-[5rem] px-2 py-2">
        <div className="mx-auto max-w-xl bg-white rounded-xl shadow-lg">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <SiteRoutes />
              <Social />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Cool Loading Screen Component
function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 via-black to-slate-800">
      <div className="text-center">
        {/* Animated logo or spinner */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-purple-300 border-b-transparent rounded-full animate-spin-reverse"></div>
        </div>
        
        {/* Loading text with animation */}
        <h1 className="text-3xl font-bold text-blue-400 mb-2">Loading A.K.G. Portfolio</h1>
        <p className="text-white/80 text-lg animate-pulse">Just a moment...</p>
        
        {/* Progress bar */}
        <div className="w-48 h-2 bg-white/30 rounded-full overflow-hidden mx-auto mt-6">
          <div className="h-full bg-white rounded-full animate-progress"></div>
        </div>
      </div>
    </div>
  );
}

export default App;