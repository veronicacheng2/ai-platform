import {PrismaClient} from'@prisma/client';


// add prisma variable to global window
declare global{
    var prisma: PrismaClient|undefined
}

const prismadb = globalThis.prisma || new PrismaClient();
if(process.env.NODE_ENV !== "production") globalThis.prisma = prismadb  // becasue of hot reload in development (we ensure that we won't get multiple prisma clients active)

export default prismadb