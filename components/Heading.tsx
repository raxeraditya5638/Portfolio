"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import sytle from "@/Styles/Headingpage.module.css";

const Heading = () => {
  const first = useRef();
  const tl = gsap.timeline();
  return (
    <div>
      <main>
        <div className="first mt-14">
          <div
            id={sytle.animetext}
            className="heading px-3 whitespace-nowrap flex w-full overflow-hidden border-2 border-white rounded-lg"
          >
            <div className="con" id={sytle.con}>
              <h1 className="text-[10vw]" id={sytle.h1}>
                We are developer
              </h1>
            </div>
            <div className="con" id={sytle.con}>
              <h1 className="text-[10vw]" id={sytle.h1}>
                We are developer
              </h1>
            </div>
            <div className="con" id={sytle.con}>
              <h1 className="text-[10vw]" id={sytle.h1}>
                We are developer
              </h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Heading;
