import {  NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({massage:"api group get"})
}

export function DELETE(){
    return NextResponse.json({massage:"api group delete"})
}

export function POST(){
    return NextResponse.json({massage:"api group update"})
}




