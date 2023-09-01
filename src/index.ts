import { Elysia, t } from "elysia";
import { GetBull, GetBullHealthTests, GetBullLineage } from "@controllers/bull-controller";
import BullService from "@services/bull-service";
import { apollo } from '@elysiajs/apollo'
import { readFileSync } from 'node:fs'
import { Bull, Resolvers, Sons } from "resolvers/resolvers-types";

// Define the app an listen on port 3000.
const app = new Elysia().listen(3000);
// Import GraphQL schema.
const typeDefs = readFileSync('./src/schema/schema.graphql', 'utf8');
// Instantiate BullService.
const bullService = new BullService();
// Define resolvers.
const resolvers: Resolvers = {
    Query: {
        Bull: async (_, { id }: { id: string }) => {
            const result = await bullService.GetBullDataByCategory<Bull>(id, "base");
            return result[0];
        },
        Sons: async (_, { id }: { id: string }) => {
            const result = await bullService.GetBullDataByCategory<Sons>(id, "sons");
            return result as Sons[];
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
