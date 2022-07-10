import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Timeline2 from "../components/Timeline";

const Home = () => {
  return (
    <>
      <div className="">
        <Hero />
      </div>
      <div className="">
        {/* <Timeline /> */}
        <Timeline2 />
      </div>
      <div className="">
        {/* <Timeline /> */}
        <Projects />
      </div>
    </>
  );
};

export default Home;
