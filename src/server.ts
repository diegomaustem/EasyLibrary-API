import "reflect-metadata";
import path from "path";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { prisma } from "./db/prisma";
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
        context: { prisma },
    });

    const { url } = await server.listen(process.env.PORT || 4000);
    console.log(`HTTP server running at ${url}`);
}

startServer().catch((error) => {
  console.error("Erro ao iniciar servidor:", error);
  process.exit(1);
});      