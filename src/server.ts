import "reflect-metadata";
import path from "path";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AuthorsResolver } from "./resolvers/authors-resolver";

async function startServer() {
    const schema = await buildSchema({
        resolvers: [
            AuthorsResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    });

    const server = new ApolloServer({         
        schema,
    });

    const { url } = await   server.listen();
    console.log(`HTTP server running at ${url}`);
}
startServer();      