import {
  Hero,
  FarmToTableSection,
  MenuHighlights,
  CelebrateTogether,
  Reservation,
} from "../components/HomeComponents";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <FarmToTableSection />
      <MenuHighlights />
      <CelebrateTogether />
      <Reservation />
    </div>
  );
};

export default Home;
