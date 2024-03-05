import React from "react";
import Image from "next/image";

const Contactus = () => {
  return (
    <div>
      <main className="">
        <div className="page-2">
          <div className="image flex-col flex justify-center items-center my-10">
            <div className="hover:backdrop-brightness-105">
              <Image
                src={"/Images/img.jpg"}
                width={400}
                height={400}
                alt="image"
                className="rounded-lg "
              ></Image>
            </div>
            <div className="para">
              <div className="text flex-col flex justify-center items-center mt-10">
                <h1 className="capitalize text-[2.5vw] mb-5 sm:mb-10">
                  This Is My expertise
                </h1>
                <div className="flex sm:justify-evenly items-center gap-3 flex-col sm:flex-row sm:gap-10">
                  <div className="image">
                    <div className="image rounded-lg h-full w-full grid grid-cols-12 sm:flex">
                      <Image
                        src={"/Images/img.jpg"}
                        width={500}
                        height={500}
                        alt="image"
                        className="rounded-lg sm:w-full col-span-6 col-start-4"
                      ></Image>
                    </div>
                  </div>
                  <div className="para w-[70vw]">
                    <p className=" text-[1.5vw] p-1 capitalize">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus adipisci placeat iste quasi ducimus at minus?
                      Magni ipsa, labore deleniti culpa iste repellat inventore
                      enim hic sunt, odit nobis quos!
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus adipisci placeat iste quasi ducimus at minus?
                        Magni ipsa, labore deleniti culpa iste repellat
                        inventore enim hic sunt, odit nobis quos!
                      </span>
                    </p>
                  </div>
                </div>
                <div className="second-box mt-5 sm:mt-20 mb-10">
                  <h1 className="capitalize text-[2vw] text-center">
                    This Is my second expertise
                  </h1>
                  <h3 className="mt-10  text-center text-[1.5vw]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Earum quis dolore autem, in modi recusandae dolorem numquam
                    eos ea blanditiis adipisci voluptates maxime eaque
                    perferendis eligendi non laudantium ipsum esse.
                  </h3>
                </div>
                <div className="flex sm:justify-evenly items-center gap-3 flex-col sm:flex-row-reverse sm:gap-10">
                  <div className="image">
                    <div className="image rounded-lg h-full w-full grid grid-cols-12 sm:flex">
                      <Image
                        src={"/Images/img.jpg"}
                        width={500}
                        height={500}
                        alt="image"
                        className="rounded-lg sm:w-full col-span-6 col-start-4"
                      ></Image>
                    </div>
                  </div>
                  <div className="para w-[70vw]">
                    <p className=" text-[1.5vw] pt-1 capitalize">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus adipisci placeat iste quasi ducimus at minus?
                      Magni ipsa, labore deleniti culpa iste repellat inventore
                      enim hic sunt, odit nobis quos!
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus adipisci placeat iste quasi ducimus at minus?
                        Magni ipsa, labore deleniti culpa iste repellat
                        inventore enim hic sunt, odit nobis quos!
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contactus;
