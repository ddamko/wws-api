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

export type BullSons = {
    ChildId: string;
    RegId: string;
    RegName: string;
    ShortName: string;
    Relationship: string;
    TPI: number;
    NaabCode: string;
}

export type BullLineage = {
    Id: string;
    ParentId: string;
    RegId: string;
    Relationship: string;
    Generation: number;
    RegName: string;
}

export type BullHaplotypes = {
    MarketingHaplotype: string;
}

export type BullNaabCodes = {
    NaabCode: string;
    Published: boolean;
    DisplayOrder: number;
    Sexed: boolean;
}

export type BullDesignations = {
    Name: string;
    Type: string;
    LegacyName: string;
    Label: string;
    Thumbnail: string;
    ActivateDate: string;
    ExpireDate: string;
}

export type BullMarketingGroups = {
    Name: string;
    Type: string;
    Action: string;
    ActionDate: string;
    ActivateDate: string;
    ExpireDate: string;
}

export type BullDamProduction = {
    Id: string;
    Name: string;
    Label: string;
    LegacyName: string;
    FormattedValue: string;
    ValueKg: number;
    ValueLb: number;
    Value: number;
    Type: string;
    Format: string;
    Published: boolean;
    DisplayOrder: number;
}

export type BullDtrAvgProduction = BullDamProduction;

export type BullMeta = {
    Meta: string;
    Value: string;   
}

export type BullHealthTest = {
    LegacyName: string;
    TestName: string;
    TestDate: string;
    TestResult: string;
}

export type BullGenotypes = {
    Name: string;
    LegacyName: string;
    Description: string;
    Value: string;
}

export type BullProdState = {
    Type: string;
    BarnCode: string;
    BarnStatus: string;
    Location: string;
    State: string;
    MoveDate: string;
    ResidencyDate: string;
    IsProduction: boolean;
    IsEU: boolean;
    IsIsolation: boolean;
    IsLayoff: boolean;
    IsLaughterHouse: boolean;
}

export type BullProofSource = {
    Type: string;
    SourceName: string;
    Label: string;
    Description: string;
}

export type BullIdentities = {
    Identifier: string;
    Type: string;
    Origin: string;
}

export const DATA_CATEGORY = {
    base: "base",
    proof: "proof",
    proofhistory: "proofhistory",
    lineage: "lineage",
    sons: "sons",
    haplotypes: "haplotypes",
    naabcodes: "naabcodes",
    campaigns: "campaigns", // TODO: This should be designations not campaigns.
    marketinggroups: "marketinggroups",
    lactation: "lactation", // TODO: This should be DamDtrProduction or something like it. Lactation is not the right term here
    proofperiod: "proofperiod",
    meta: "meta",
    healthtest: "healthtest",
    genotypes: "genotypes",
    prodstat: "prodStat",
    proofsource: "proofsource",
    identities: "identities"
} as const;

export type DataCategory = keyof typeof DATA_CATEGORY;