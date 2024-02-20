"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Style from "@/Styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className="">
      <div className="nav bg-green-500">
        <nav className="flex items-center justify-between py-4 px-4">
          <div
            className="Left flex items-center justify-between text-2xl text-white"
            id={Style.Left}
          >
            <div className="img">
              <Image
                alt="IMG"
                src="/Images/img.jpg"
                width={30}
                height={30}
                className="rounded-full"
              ></Image>
            </div>
            <Link href={"/"}>Aditya</Link>
          </div>
          <div
            className="Right hidden sm:flex justify-between items-center text-2xl"
            id={Style.Right}
          >
            <ul className="flex justify-between items-center text-2xl">
              <li>
                <button>
                  <Link
                    href={""}
                    className="rounded-xl text-white hover:underline"
                  >
                    Contact Us
                  </Link>
                </button>
              </li>
              <li>
                <button>
                  <Link
                    href={""}
                    className="rounded-xl text-white hover:underline"
                  >
                    Deveplopment
                  </Link>
                </button>
              </li>
              <li>
                <button>
                  <Link
                    href={"/login"}
                    className="rounded-xl text-white hover:underline"
                  >
                    Login
                  </Link>
                </button>
              </li>
            </ul>
          </div>
          <div className="ham sm:hidden">
            <Image
              src={"/Images/login.svg"}
              alt="logo"
              width={32}
              height={32}
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
