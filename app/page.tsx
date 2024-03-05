import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import { redirect } from "next/navigation";
import React from "react";
import { getServerSession } from "next-auth";
import {authOptions} from "../app/api/auth/[...nextauth]/route"

const page = async () => {

  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <div>
      <Hero />
      <Heading />
    </div>
  );
};

export default page;
