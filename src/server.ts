import "reflect-metadata";
import { ApolloServer } from "apollo-server";

async function startServer() {

    const server = new ApolloServer({         
    
    });

    const { url } = await   server.listen();
    console.log(`HTTP server running at ${url}`);
}
startServer();      