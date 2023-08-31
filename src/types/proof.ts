export type Proof = {
    Category: string;
    Trait: string;
    LegacyName: string;
    Value: number;
    IsPublished: boolean;
    Format: string;
    Country: string;
}

export type ProofHistory = {
    ProofDate: string;
}

export type ProofPeriod = {
    Id: string;
    EvalCountry: string;
    EvalDateStart: string;
    EvalDateEnd: string;
    EvalType: string;
}