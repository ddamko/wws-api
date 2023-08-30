export type GlobalId = {
    GlobalId: string;
}

export type Bull = {
    GlobalId: string;
    RegId: string;
    ShortName: string;
    RegName: string;
    Gender: string;
    DateOfBirth: string;
    SireStack: string;
    IsDead: boolean;
    NaabCode: string;
    Recessives: string;
    Country: string;
    Breed: string;
    BreedSort: string;
    BreedGroup: string;
    YoungSire: string;
    ReleaseDate: string;
    Controller: number;
    UpdateDate: string;
}

export const DATA_CATEGORY = {
    base: "base",
    proof: "proof",
    proofHistory: "proofHistory",
    lineage: "lineage",
    sons: "sons",
    haplotypes: "haplotypes",
    naabCodes: "naabCodes",
    campaigns: "campaigns",
    marketinggroups: "marketinggroups",
    lactation: "lactation",
    proofPeriod: "proofPeriod",
    meta: "meta",
    healthTest: "healthTest",
    genotypes: "genotypes",
    prodStat: "prodStat",
    proofSource: "proofSource",
    identities: "identities"
} as const;

export type DataCategory = keyof typeof DATA_CATEGORY;