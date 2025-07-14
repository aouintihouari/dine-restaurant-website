import { Routes, Route } from "react-router";
import { Home, Booking } from "./pages";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="spartan w-full max-w-full overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
