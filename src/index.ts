import { Elysia, t } from "elysia";
// import { GetBull, GetBullHealthTests, GetBullLineage } from "@controllers/bull-controller";
import { apollo } from '@elysiajs/apollo'
import { readFileSync } from 'node:fs'
import { Resolvers } from "@app-types/gen-types";
import {
    BullDamProductionResolver,
    BullDesignationsResolver,
    BullGenotypesResolver,
    BullHaplotypesResolver,
    BullHeathTestsResolver,
    BullIdentityResolver,
    BullLineageResolver,
    BullMarketingGroupsResolver,
    BullMetaResolver,
    BullNaabCodesResolver,
    BullProdStateResolver,
    BullProofHistoryResolver,
    BullProofResolver,
    BullProofSourceResolver,
    BullResolver,
    BullSonsResolver
} from "@resolvers/bull-resolver";

// Define the app an listen on port 3000.
const app = new Elysia().listen({ hostname: '0.0.0.0', port: process.env.port || 3000 });
// Import GraphQL schema.
const typeDefs = readFileSync('./src/schema/schema.graphql', 'utf8');
// Define resolvers.
const resolvers: Resolvers = {
    Query: {
        Bull: BullResolver
    },
    Bull: {
        Sons: BullSonsResolver,
        Lineage: BullLineageResolver,
        HealthTests: BullHeathTestsResolver,
        NaabCodes: BullNaabCodesResolver,
        Haplotypes: BullHaplotypesResolver,
        Designations: BullDesignationsResolver,
        MarketingGroups: BullMarketingGroupsResolver,
        DamProduction: BullDamProductionResolver,
        Meta: BullMetaResolver,
        Genotypes: BullGenotypesResolver,
        ProdState: BullProdStateResolver,
        Identities: BullIdentityResolver,
        ProofHistory: BullProofHistoryResolver,
        ProofSource: BullProofSourceResolver,
        Proof: BullProofResolver
    }
}

app.use(apollo({ typeDefs: typeDefs, resolvers: resolvers }));

// app.get("/bull/:id", GetBull, { params: t.Object({ id: t.String() }) });
// app.get("/bull/health/:id", GetBullHealthTests, { params: t.Object({ id: t.String() }) });
// app.get("/bull/lineage/:id", GetBullLineage, { params: t.Object({ id: t.String() }) });

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
