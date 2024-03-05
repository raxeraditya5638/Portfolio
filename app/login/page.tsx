"use client";
import style from "@/Styles/Loginpage.module.css";
import { FormEvent, useState } from "react";
import { SignInResponse, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Loginpage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
  });
  const session = useSession();

  const router = useRouter();

  const handleForm = async (event: any) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.password) {
      return;
    }
    try {
      const res = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      if (res?.error) {
        error: form.error;
        console.log("errror errorrrrr");
      }
    } catch (error) {}
  };

  return (
    <div>
      <div className="login">
        <div className="flex items-center justify-center flex-col gap-5">
          <div className="heading">
            <h1>Login Page</h1>
          </div>
          <form onSubmit={handleForm} className="flex flex-col">
            <div className="name flex flex-col shrink">
              <div className="flex items-center justify-between shrink">
                <label htmlFor="name" className="font-semibold uppercase">
                  Name
                </label>
              </div>
              <input
                id={style.ip3}
                type="text"
                className="rounded-lg font-semibold text-black py-2 px-4 border-2"
                onChange={(e) => {
                  setForm({
                    ...form,
                    name: e.target.value,
                  });
                }}
                value={form.name}
              />
            </div>
            <div className="email flex flex-col justify-center">
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="font-semibold uppercase">
                  email
                </label>
              </div>
              <input
                id={style.ip3}
                type="text"
                className="rounded-lg font-semibold text-black py-2 px-4 border-2"
                onChange={(e) => {
                  setForm({
                    ...form,
                    email: e.target.value,
                  });
                }}
                value={form.email}
              />
            </div>
            <div className="password flex flex-col justify-center">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="font-semibold uppercase">
                  password
                </label>
              </div>
              <input
                type="password"
                className="rounded-lg font-semibold text-black py-2 px-4 border-2"
                id={style.ip3}
                onChange={(e) => {
                  setForm({
                    ...form,
                    password: e.target.value,
                  });
                }}
                value={form.password}
              />
            </div>
            <div className="checkmain">
              <div className="checkbox flex gap-3 items-center justify-start">
                <input type="checkbox" name="" id="" />
                <label htmlFor="remember me">remember me</label>
              </div>
            </div>
            <div className="btn mt-4 flex flex-col">
              <div className="formbtn flex flex-col sm:flex-row gap-4">
                {" "}
                {/* Change to flex-col for small screens */}
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="px-4 py-2 rounded-lg bg-red-600"
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
          <div className="link mt-4">
            <Link
              href={"/register"}
              className="bg-green-500 py-3 px-5 rounded-lg"
            >
              Register Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
