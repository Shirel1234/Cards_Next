import PostApi from "@/app/types/postapi"
import { NextResponse } from "next/server";

const posts: PostApi[] = Array.from({length:30}).map((_, index)=>{
    return{
          id: index +1,
          title: `Post title ${index}`,
          body: `Post body ${index}`,
    };
});

export async function GET(){
    return NextResponse.json(posts);
}