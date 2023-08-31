import { Elysia, t } from "elysia";
import { GetBull, GetBullHealthTests, GetBullLineage } from "@controllers/bull-controller";
import { apollo, gql } from '@elysiajs/apollo'
import { readFileSync } from 'node:fs'
import { Resolvers } from "resolvers/resolvers-types";

// Define the app an listen on port 3000.
const app = new Elysia().listen(3000);
// Import GraphQL schema.
const typeDefs = readFileSync('./schema/schema.graphql', 'utf8');

const resolvers: Resolvers = {
    Query: {
        GetBull: async (_: any, { id }: { id: any }) => {
            return { GlobalId: "", RegId: "", Gender: "" }
        }
    }
}

app.use(apollo({ typeDefs: typeDefs, resolvers: resolvers }));

app.get("/bull/:id", GetBull, { params: t.Object({ id: t.String() }) });
app.get("/bull/health/:id", GetBullHealthTests, { params: t.Object({ id: t.String() }) });
app.get("/bull/lineage/:id", GetBullLineage, { params: t.Object({ id: t.String() }) });

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
