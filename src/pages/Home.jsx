import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import HeroContent from "../components/HeroContent";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Form from "../components/Form";

const Home = () => {
  const [playStatus, setPlayStatus] = useState(false);
  const [heroCount, setHeroCount] = useState(2);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 10000);
  }, []);
  return (
    <div>
      <Hero playStatus={playStatus} heroCount={heroCount} />
      <Nav />
      <HeroContent
        setPlayStatus={setPlayStatus}
        playStatus={playStatus}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
      <AboutUs />
      <Services />
      <Form />
    </div>
  );
};

export default Home;
