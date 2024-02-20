import { connectdb } from "@/lib/mongodb";
import { userModel } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    try {
        await connectdb();
        // request.json is hold all data from database
        const {email,name} = await request.json();
        const userfind = await userModel.findOne({email:email,name:name});
        console.log("users allready present",userModel);
        return NextResponse.json({userfind})
    } catch (error) {
        console.log("error ", error)
    }
}