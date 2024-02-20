import React from "react";
import gsap from "gsap";
import style from "@/Styles/Hero.module.css";

const Hero = () => {
  const tl = gsap.timeline();
  return (
    <div>
      <div className="main px-5 py-10">
        <main>
          <div className="top flex flex-col">
            <div className="flex" id={style.box}>
              {"we create".split("").map((item, index) => (
                <span className="font-semibold text-[10vw] tracking-tighter leading-none">
                  {item}
                </span>
              ))}
            </div>
            <div className="second flex flex-row items-center gap-3">
              <div className="box w-[12vw] rounded-lg h-[10vh] bg-cyan-500"></div>
              <div className="flex font-semibold text-[10vw] tracking-tighter leading-none">
                {"Some New".split("").map((item, index) => (
                  <span>{item}</span>
                ))}
              </div>
            </div>
            <div className="flex font-semibold text-[10vw] tracking-tighter leading-none">
              {"Technology".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
