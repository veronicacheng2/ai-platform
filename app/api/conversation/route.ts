import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import {Configuration, OpenAIApi} from 'openai';

const configuration = new Configuration({
    apiKey:process.env.OPENAI_API_KEY
}) 

const openai = new OpenAIApi(configuration);

export async function POST(req:Request){
    try{
        const {userId} = auth()
        const body = await req.json();
        const {message} = body

        if(!userId){
            return new NextResponse("Unauthorized",{status:401});
        }

        if(!configuration.apiKey){
            return new NextResponse("OpenAI API Key not configured", {status:500})
        }

        if(!message){
            return new NextResponse("Messages are required!", {status:400})
        }

        const response = await openai.chat.completions.create({
            model:"gpt-3.5-turbo",
            message
        });

        console.log(response);
        return NextResponse.json(response.choices[0].message)
    }
    catch(err){
        console.log("[CONVERSATION_ERROR]",err)
        return new NextResponse("Internal Error",{status:500})
    }
}