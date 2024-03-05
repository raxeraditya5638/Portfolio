import style from "@/Styles/Loginpage.module.css";
import Link from "next/link";

const Loginsidebar = () => {
  return (
    <div className="sm:w-[40vw]">
      <div className="">
        <div className="flex flex-col justify-center items-center bg-sky-500 rounded-lg px-10 w-full">
          <div className="text-center pt-5">
            <h2>Good To know</h2>
          </div>
          <div className="text mt-10" id={style.loginText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            ullam, sapiente inventore voluptatem praesentium, explicabo quo
            accusamus nesciunt corporis aliquid, voluptate eum assumenda eius
            ipsa debitis? Amet debitis sit ipsum?
          </div>
          <div className="heading-2 mt-10">
            <h1>Create Something Else</h1>
          </div>
          <div className="register underline pb-5">
            <Link href={"/register"}>Get Started</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginsidebar;
