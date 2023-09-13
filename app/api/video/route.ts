import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import Replicate from 'replicate';
import { consumeFreeLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from '@/lib/subscription';

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
        const isPro = await checkSubscription();

        if(!freeTrial && !isPro){
            return new NextResponse("Free trial has expired.",{status:403})
        }


        const response  = await replicate.run(
            "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
            {
              input: {
                prompt: values.prompt
              }
            }
          );

        if(!isPro){
            await consumeFreeLimit();
        }
    
        return NextResponse.json(response)
    }
    catch(err){
        console.log("[VIDEO_ERROR]",err)
        return new NextResponse("Internal Error",{status:500})
    }
}