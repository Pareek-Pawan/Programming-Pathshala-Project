import React from "react";
import cover from "../assets/aboutcover.jpg";
const About = () => {
  return (
    <div className="text-white -mx-2 mb-20">
      <div>
        <img className="z-0" src={cover} />
      </div>
      <div className="z-10 -mt-20 my-20 md:-mt-52 font-bold text-4xl md:text-8xl  drop-shadow-xl opacity-75">
        Hello there!
      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-2 mx-2">
        <div className="col-span-1">
        My name is Pawan Pareek,I'm 21 years old and I'm from Kolkata, West Bengal.
        Currently pursuing my Bachelor's of technology in Computer Science and Engineering from Lovely Professional University. 
        Also, My hobby is Photography.
        </div>
        <div className="col-span-1 "></div>
      </div>
    </div>
  );
};

export default About;
