import React from "react";
import Image from "next/image";

const Development = () => {
  return (
    <div>
      <main>
        <div className="jango">
          <div className="first grid grid-cols-12">
            <div className="text col-start-4 col-span-6">
              <div className="h1 mt-5">
                <h1 className="text-center">Django</h1>
              </div>
              <div className="flex items-center justify-center mt-10">
                <div className="image">
                  <Image
                    className="rounded-lg"
                    src={"/Images/img.jpg"}
                    height={200}
                    width={200}
                    alt="image"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Development;
