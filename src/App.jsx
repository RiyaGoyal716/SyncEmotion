import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="pt-20 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 flex items-center justify-center">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
