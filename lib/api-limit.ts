import {auth} from "@clerk/nextjs";

import prismadb from "./prismadb";
import { MAX_FREE_COUNTS } from "@/constants";

// consume the user's free API quota (cannot exceed MAX_FREE_COUNTS)
export const consumeFreeLimit= async () => {
    const {userId} = auth();

    if(!userId){
        return;
    }


    // check if the user exists in the db
    const userApiLimit = await prismadb.userApiLimit.findUnique({
        where:{
            userId
        }
    })


    if(userApiLimit){
        await prismadb.userApiLimit.update({
            where:{userId},
            data:{
                count: userApiLimit.count +1
            }
        })
    }else{
        // the user does not exist
        await prismadb.userApiLimit.create({
            data:{userId,count:1}
        })

    }
}  

export const checkApiLimit = async () => {
    const {userId} = auth()

    if(!userId) return false

    const userApiLimit = await prismadb.userApiLimit.findUnique({where:{
        userId
    }})

    if(!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS){
        return true;
    }else{
        return false;
    }

}