//will never need to change this code 
import {fetchRequestHandler} from "@trpc/server/adapters/fetch"
import { appRouter } from "@/app/server"

const handler = (req: Request) => 
    fetchRequestHandler({
        endpoint: "/api/trpc",
        req,
        router: appRouter,
        createContext: ( () => ({})),
    });

    export {handler as GET, handler as POST}