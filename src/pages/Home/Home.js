import StatsCard from "../../components/web_stats/StatsCard";
import PremiumCards from "../../components/PremiumPacks/PremiumCards";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <StatsCard />
      <PremiumCards />
    </div>
  );
};

export default Home;
