import Profile from "../components/Profile";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Profile />
      <Projects />
      
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-8 px-4 sm:px-6 md:px-6 lg:px-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-2xl font-semibold leading-tight">
          Clean code. Sleek design. Big energy.
        </h1>
        <p className="text-sm sm:text-base md:text-md text-gray-500 mt-3 max-w-2xl">
          Let's build something Legendary.
        </p>
      </div>
    </>
  );
}
