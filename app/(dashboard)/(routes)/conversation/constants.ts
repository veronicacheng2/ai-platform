import * as z from 'zod'

export const formSchema = z.object({
   // validation (string, min lenght 1)
    prompt:z.string().min(1,{
        message:"Prompt is required"
    })
})