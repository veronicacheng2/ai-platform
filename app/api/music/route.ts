import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import Replicate from 'replicate';
import { consumeFreeLimit, checkApiLimit } from "@/lib/api-limit";

const replicate = new Replicate({
    auth:process.env.REPLICATE_API_TOKEN as string
})

export async function POST(req:Request){
    try{
        const {userId} = auth()
        const body = await req.json();
        const {values} = body

        if(!userId){
            return new NextResponse("Unauthorized",{status:401});
        }

        if(!values){
            return new NextResponse("Prompt is required!", {status:400})
        }

        const freeTrial = await checkApiLimit();

        if(!freeTrial){
            return new NextResponse("Free trial has expired.",{status:403})
        }

        const response = await replicate.run(
            "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
            {
              input: {
                prompt_a: values.prompt
              }
            }
          );

        await consumeFreeLimit();

        return NextResponse.json(response)
    }
    catch(err){
        console.log("[MUSIC_ERROR]",err)
        return new NextResponse("Internal Error",{status:500})
    }
}