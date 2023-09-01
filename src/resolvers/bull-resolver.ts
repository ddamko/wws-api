import { Bull, Sons, Lineage, BullLineageArgs, HealthTests, NaabCode, Haplotypes, Designation, MarketingGroup, DamProduction, Meta, Genotype, ProdState, ProofSource, ProofHistory, Proof, Identities } from "@app-types/gen-types";
import BullService from "@services/bull-service";

const bullService = new BullService();

export const BullResolver = async (_: {}, { id }: { id: string }) => {
    const result = await bullService.GetBullDataByCategory<Bull>(id, "base");
    return result[0];
}

export const BullSonsResolver = async (parent: Bull) => {
    const result = await bullService.GetBullDataByCategory<Sons>(parent.GlobalId, "sons");
    parent.Sons = result.filter(x => x.NaabCode !== null) as Sons[];
    return parent.Sons;
}

export const BullLineageResolver = async (parent: Bull, args: Partial<BullLineageArgs>) => {
    const result = await bullService.GetBullDataByCategory<Lineage>(parent.GlobalId, "lineage");

    if (args.input?.Generation) {
        parent.Lineage = result.filter(x => x.Generation === args.input?.Generation) as Lineage[];
        return parent.Lineage;
    }

    parent.Lineage = result as Lineage[];
    return parent.Lineage;
}

export const BullHeathTestsResolver = async (parent: Bull) => {
    const result = await bullService.GetBullDataByCategory<HealthTests>(parent.GlobalId, "healthtest");
    parent.HealthTests = result as HealthTests[];
    return parent.HealthTests;
}

export const BullNaabCodesResolver = async (parent: Bull) => {
    const result = await bullService.GetBullDataByCategory<NaabCode>(parent.GlobalId, "naabcodes");
    parent.NaabCodes = result as NaabCode[];
    return parent.NaabCodes;
}

export const BullHaplotypesResolver = async (parent: Bull) => {
    const result = await bullService.GetBullDataByCategory<Haplotypes>(parent.GlobalId, "haplotypes");
    parent.Haplotypes = result as Haplotypes;
    return parent.Haplotypes;
}

export const BullDesignationsResolver = async (parent: Bull) => {
    const result = await bullService.GetBullDataByCategory<Designation>(parent.GlobalId, "campaigns");
    parent.Designations = result as Designation[];
    return parent.Designations;
}

export const BullMarketingGroupsResolver = async (parent: Bull) => {
    const result = await bullService.GetBullDataByCategory<MarketingGroup>(parent.GlobalId, "marketinggroups");
    parent.MarketingGroups = result as MarketingGroup[];
    return parent.MarketingGroups;
}

export const BullDamProductionResolver = async (parent: Bull) => {
    const result = await bullService.GetBullDataByCategory<DamProduction>(parent.GlobalId, "lactation");
    parent.DamProduction = result as DamProduction[];
    return parent.DamProduction;
}

export const BullMetaResolver = async (parent: Bull) => {
    const result = await bullService.GetBullDataByCategory<Meta>(parent.GlobalId, "meta");
    parent.Meta = result[0] as Meta[];
    return parent.Meta;
}

export const BullGenotypesResolver = async (parent: Bull) => {
    const result = await bullService.GetBullDataByCategory<Genotype>(parent.GlobalId, "genotypes");
    parent.Genotypes = result as Genotype[];
    return parent.Genotypes;
}

export const BullProdStateResolver = async (parent: Bull) => {
    const result = await bullService.GetBullDataByCategory<ProdState>(parent.GlobalId, "prodstat");
    parent.ProdState = result[0] as ProdState;
    return parent.ProdState;
}

export const BullIdentityResolver = async (parent: Bull) => {
    const result = await bullService.GetBullDataByCategory<Identities>(parent.GlobalId, "identities");
    parent.Identities = result[0] as Identities[];
    return parent.Identities;
}

export const BullProofSourceResolver = async (parent: Bull) => {
    const result = await bullService.GetBullDataByCategory<ProofSource>(parent.GlobalId, "proofsource");
    parent.ProofSource = result[0] as ProofSource[];
    return parent.ProofSource;
}

export const BullProofHistoryResolver = async (parent: Bull) => {
    const result = await bullService.GetBullDataByCategory<ProofHistory>(parent.GlobalId, "proofhistory");
    parent.ProofHistory = result as ProofHistory[];
    return parent.ProofHistory;
}

export const BullProofResolver = async (parent: Bull) => {
    const result = await bullService.GetBullDataByCategory<Proof>(parent.GlobalId, "proof");
    parent.Proof = result as Proof[];
    return parent.Proof;
}