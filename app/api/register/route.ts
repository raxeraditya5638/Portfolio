import { NextRequest, NextResponse } from "next/server";
import { userModel } from "@/models/user";
import { connectdb } from "@/lib/mongodb";

export async function POST(request:NextRequest) {
    try {
        // request udhar se ayegi usme name email password lastname he
        const {name, lastname, email, password} = await request.json();

        // console.log(name);
        // console.log(email);
        // console.log(password);
        await connectdb();
        await userModel.create({name,lastname,email, password});
        return NextResponse.json({
            message:"user registered"
        }, {status:201})
    } catch (error) {
        return NextResponse.json({
            message: "ane error"
        }, {
            status:500
        })
    }
}