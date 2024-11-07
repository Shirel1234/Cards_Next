import { NextRequest, NextResponse } from "next/server";
import connect from "@/app/lib/db/mongodb";
import User from "@/app/lib/models/User";

export async function GET(){
    try{
        await connect();
        // const data = await User.find()
        console.log("rrr");
        return NextResponse.json({message:"successfull"});
    }catch(error){
        return NextResponse.json("Error in fetching posts" +error);
    }
}

export async function POST(request: NextRequest){
    try{
        await connect();
        const {username, email, password} = await request.json()
        const newUser = new User({username, email, password});
        await newUser.save();

        return NextResponse.json({message:'User created successfully', user: newUser},
            {status: 201}
        );
    }catch(error){
        return NextResponse.json("Error in fetching posts" +error);
    }
}