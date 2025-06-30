import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";
import { DecoderText } from "../components/decoder-text";

const About = () => {
  const grid2Container = useRef();
  return (
    <section
      className="c-space min-h-screen flex flex-col gap-6 md:mt-0 sm:mt-0 mt-10"
      id="about"
    >
      {/* <h2 className="text-heading">About Me</h2> */}
      <DecoderText
        className="text-heading"
        text="About Me"
        delay={500}
      ></DecoderText>
      {/* Top two grids side by side on md+ */}
      <div className="flex flex-col md:flex-row w-full flex-1 gap-6">
        {/* Grid 1 */}
        <div className="relative flex-1 rounded-2xl bg-gradient-to-b from-storm to-indigo overflow-hidden flex items-end p-6 min-h-[24rem] md:min-h-[32rem]">
          <img
            src="assets/image.png"
            alt="Savya Gupta"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-90"
          />
          <div className="z-10 relative">
            <p className="headtext">Hi, I'm Savya Gupta</p>
            <p className="subtext">
              Over the last year, I have developed many frontend and backend
              applications and interacted with various users.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 3 */}
        <div className="relative flex-1 rounded-2xl bg-gradient-to-tl from-[#3A3A3A] via-[#242424] to-[#3A3A3A] overflow-hidden flex flex-col justify-between p-6 min-h-[24rem] md:min-h-[32rem]">
          <div className="z-10 relative">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in India, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
      </div>

      {/* Grid 5 full-width below */}
      <div
        className="mt-5 w-full rounded-2xl md:bg-gradient-to-b from-black to-zinc-900 sm:bg-gradient-to-b lg:bg-gradient-to-b
 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 min-h-[18rem] md:min-h-[24rem]"
      >
        <div className="z-10 w-full md:w-[50%]">
          <p className="headtext hidden md:block">Tech Stack</p>
          <p className="subtext hidden md:block">
            I specialize in a variety of languages, frameworks, and tools that
            allow me to build robust and scalable applications.
          </p>
        </div>
        <div className="relative w-full md:w-[50%] h-64 md:h-full">
          <Frameworks />
        </div>
      </div>
    </section>
  );
};

export default About;
