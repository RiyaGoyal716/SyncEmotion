// src/pages/Home.jsx
import Hero from "../components/Hero"; // ✅ Import the Hero component

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      <Hero /> {/* ✅ Rendering the Hero section */}
    </div>
  );
};

export default Home;
