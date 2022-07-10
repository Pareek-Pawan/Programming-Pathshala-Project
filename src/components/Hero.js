import TypeAnimation from "react-type-animation";
import pro from "../assets/pro.jpg";
const Hero = () => {
  return (
    <>
      <div className="relative h-screen md:-mt-20 lg:p-16 md:grid md:grid-cols-1 z-0 mt-32">
        <div className="grid md:grid-cols-2 justify-center mx-10">
          {/* Animated Section */}
          <div className="w-max md:text-[4.5rem] text-[2rem] flex flex-col md:flex md:justify-center lg:items-start items-center font-bold md:order-none order-1 mt-5">
            <div className="flex">
              <p className="text-heroArrow ">&lt;</p>
              <p className="text-heroText ">Hello 👋</p>
              <p className="text-heroArrow">/&gt;</p>
            </div>
            <div className="flex md:text-[4rem]">
              <p className="text-heroArrow ">&lt;</p>
              <div className="flex">
                <p className="text-paleWhite ">I'm</p>&nbsp;
                <div className="flex text-transparent bg-clip-text bg-gradient-to-br from-[#5bbeeb] to-[#9241ff]">
                  <TypeAnimation
                    className="whitespace-nowrap "
                    cursor={true}
                    sequence={[
                      "Pawan.",
                      1000,
                      "a Designer.",
                      1000,
                      "a Developer.",
                      1000,
                    ]}
                    wrapper="h2"
                    repeat={Infinity}
                  />
                </div>
              </div>
              <p className="text-heroArrow">/&gt;</p>
            </div>
          </div>

          {/* Image Section */}
          <div className=" md:ml-40 md:justify-end md:mr-2 flex justify-center items-center">
              <img className="h-36 md:h-52 rounded-full " src={pro} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
