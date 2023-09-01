import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Bull = {
  __typename?: 'Bull';
  Breed?: Maybe<Scalars['String']['output']>;
  BreedGroup?: Maybe<Scalars['String']['output']>;
  BreedSort?: Maybe<Scalars['String']['output']>;
  Controller?: Maybe<Scalars['Int']['output']>;
  Country?: Maybe<Scalars['String']['output']>;
  DamProduction?: Maybe<Array<Maybe<DamProduction>>>;
  DateOfBirth?: Maybe<Scalars['Date']['output']>;
  Designations?: Maybe<Array<Maybe<Designation>>>;
  DtrAvgProduction?: Maybe<Array<Maybe<DtrAvgProduction>>>;
  Gender?: Maybe<Scalars['String']['output']>;
  Genotypes?: Maybe<Array<Maybe<Genotype>>>;
  GlobalId: Scalars['String']['output'];
  Haplotypes?: Maybe<Haplotypes>;
  HealthTests?: Maybe<Array<Maybe<HealthTests>>>;
  Identities?: Maybe<Array<Maybe<Identities>>>;
  IsDead?: Maybe<Scalars['Boolean']['output']>;
  Lineage?: Maybe<Array<Maybe<Lineage>>>;
  MarketingGroups?: Maybe<Array<Maybe<MarketingGroup>>>;
  Meta?: Maybe<Array<Maybe<Meta>>>;
  NaabCode?: Maybe<Scalars['String']['output']>;
  NaabCodes?: Maybe<Array<Maybe<NaabCode>>>;
  ProdState?: Maybe<ProdState>;
  Proof?: Maybe<Array<Maybe<Proof>>>;
  ProofHistory?: Maybe<Array<Maybe<ProofHistory>>>;
  ProofPeriod?: Maybe<Array<Maybe<ProofPeriod>>>;
  ProofSource?: Maybe<Array<Maybe<ProofSource>>>;
  Recessives?: Maybe<Scalars['String']['output']>;
  RegId: Scalars['String']['output'];
  RegName?: Maybe<Scalars['String']['output']>;
  ReleaseDate?: Maybe<Scalars['Date']['output']>;
  ShortName?: Maybe<Scalars['String']['output']>;
  SireStack?: Maybe<Scalars['String']['output']>;
  Sons?: Maybe<Array<Maybe<Sons>>>;
  UpdateDate?: Maybe<Scalars['Date']['output']>;
  YoungSire?: Maybe<Scalars['String']['output']>;
};


export type BullLineageArgs = {
  input?: InputMaybe<LineageInput>;
};

export type DamProduction = Production & {
  __typename?: 'DamProduction';
  DisplayOrder?: Maybe<Scalars['Int']['output']>;
  Format?: Maybe<Scalars['String']['output']>;
  FormattedValue?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  LegacyName?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Published?: Maybe<Scalars['Boolean']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Value?: Maybe<Scalars['Float']['output']>;
  ValueKg?: Maybe<Scalars['Int']['output']>;
  ValueLb?: Maybe<Scalars['Int']['output']>;
};

export type Designation = {
  __typename?: 'Designation';
  ActivateDate?: Maybe<Scalars['Date']['output']>;
  ExpireDate?: Maybe<Scalars['Date']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  LegacyName?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Thumbnail?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
};

export type DtrAvgProduction = Production & {
  __typename?: 'DtrAvgProduction';
  DisplayOrder?: Maybe<Scalars['Int']['output']>;
  Format?: Maybe<Scalars['String']['output']>;
  FormattedValue?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  LegacyName?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Published?: Maybe<Scalars['Boolean']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Value?: Maybe<Scalars['Float']['output']>;
  ValueKg?: Maybe<Scalars['Int']['output']>;
  ValueLb?: Maybe<Scalars['Int']['output']>;
};

export type Genotype = {
  __typename?: 'Genotype';
  Description?: Maybe<Scalars['String']['output']>;
  LegacyName?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Value?: Maybe<Scalars['String']['output']>;
};

export type Haplotypes = {
  __typename?: 'Haplotypes';
  MarketingHaplotype?: Maybe<Scalars['String']['output']>;
};

export type HealthTests = {
  __typename?: 'HealthTests';
  LegacyName?: Maybe<Scalars['String']['output']>;
  TestDate?: Maybe<Scalars['Date']['output']>;
  TestName?: Maybe<Scalars['String']['output']>;
  TestResult?: Maybe<Scalars['String']['output']>;
};

export type Identities = {
  __typename?: 'Identities';
  Identifier?: Maybe<Scalars['String']['output']>;
  Origin?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
};

export type Lineage = {
  __typename?: 'Lineage';
  Generation: Scalars['Int']['output'];
  Id: Scalars['String']['output'];
  ParentId: Scalars['String']['output'];
  RegId: Scalars['String']['output'];
  RegName?: Maybe<Scalars['String']['output']>;
  Relationship: Scalars['String']['output'];
};

export type LineageInput = {
  Generation: Scalars['Int']['input'];
};

export type MarketingGroup = {
  __typename?: 'MarketingGroup';
  Action?: Maybe<Scalars['String']['output']>;
  ActionDate?: Maybe<Scalars['Date']['output']>;
  ActivateDate?: Maybe<Scalars['Date']['output']>;
  ExpireDate?: Maybe<Scalars['Date']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
};

export type Meta = {
  __typename?: 'Meta';
  Meta?: Maybe<Scalars['String']['output']>;
  Value?: Maybe<Scalars['String']['output']>;
};

export type NaabCode = {
  __typename?: 'NaabCode';
  DisplayOrder?: Maybe<Scalars['Int']['output']>;
  NaabCode?: Maybe<Scalars['String']['output']>;
  Published?: Maybe<Scalars['Boolean']['output']>;
  Sexed?: Maybe<Scalars['Boolean']['output']>;
};

export type ProdState = {
  __typename?: 'ProdState';
  BarnCode?: Maybe<Scalars['String']['output']>;
  BarnStatus?: Maybe<Scalars['String']['output']>;
  IsEU?: Maybe<Scalars['Boolean']['output']>;
  IsIsolation?: Maybe<Scalars['Boolean']['output']>;
  IsLaughterHouse?: Maybe<Scalars['Boolean']['output']>;
  IsLayoff?: Maybe<Scalars['Boolean']['output']>;
  IsProduction?: Maybe<Scalars['Boolean']['output']>;
  Location?: Maybe<Scalars['String']['output']>;
  MoveDate?: Maybe<Scalars['String']['output']>;
  ResidencyDate?: Maybe<Scalars['String']['output']>;
  State?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
};

export type Production = {
  DisplayOrder?: Maybe<Scalars['Int']['output']>;
  Format?: Maybe<Scalars['String']['output']>;
  FormattedValue?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  LegacyName?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Published?: Maybe<Scalars['Boolean']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Value?: Maybe<Scalars['Float']['output']>;
  ValueKg?: Maybe<Scalars['Int']['output']>;
  ValueLb?: Maybe<Scalars['Int']['output']>;
};

export type Proof = {
  __typename?: 'Proof';
  Category?: Maybe<Scalars['String']['output']>;
  Country?: Maybe<Scalars['String']['output']>;
  Format?: Maybe<Scalars['String']['output']>;
  IsPublished?: Maybe<Scalars['Boolean']['output']>;
  LegacyName?: Maybe<Scalars['String']['output']>;
  Trait?: Maybe<Scalars['String']['output']>;
  Value?: Maybe<Scalars['Float']['output']>;
};

export type ProofHistory = {
  __typename?: 'ProofHistory';
  ProofDate?: Maybe<Scalars['Date']['output']>;
};

export type ProofPeriod = {
  __typename?: 'ProofPeriod';
  EvalCountry?: Maybe<Scalars['String']['output']>;
  EvalDateEnd?: Maybe<Scalars['Date']['output']>;
  EvalDateStart?: Maybe<Scalars['Date']['output']>;
  EvalType?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['String']['output']>;
};

export type ProofSource = {
  __typename?: 'ProofSource';
  Description?: Maybe<Scalars['String']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  SourceName?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Bull: Bull;
};


export type QueryBullArgs = {
  id: Scalars['String']['input'];
};

export type Sons = {
  __typename?: 'Sons';
  ChildId: Scalars['String']['output'];
  NaabCode?: Maybe<Scalars['String']['output']>;
  RegId: Scalars['String']['output'];
  RegName?: Maybe<Scalars['String']['output']>;
  Relationship: Scalars['String']['output'];
  ShortName?: Maybe<Scalars['String']['output']>;
  TPI?: Maybe<Scalars['Int']['output']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  Production: ( DamProduction ) | ( DtrAvgProduction );
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Bull: ResolverTypeWrapper<Bull>;
  DamProduction: ResolverTypeWrapper<DamProduction>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Designation: ResolverTypeWrapper<Designation>;
  DtrAvgProduction: ResolverTypeWrapper<DtrAvgProduction>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Genotype: ResolverTypeWrapper<Genotype>;
  Haplotypes: ResolverTypeWrapper<Haplotypes>;
  HealthTests: ResolverTypeWrapper<HealthTests>;
  Identities: ResolverTypeWrapper<Identities>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Lineage: ResolverTypeWrapper<Lineage>;
  LineageInput: LineageInput;
  MarketingGroup: ResolverTypeWrapper<MarketingGroup>;
  Meta: ResolverTypeWrapper<Meta>;
  NaabCode: ResolverTypeWrapper<NaabCode>;
  ProdState: ResolverTypeWrapper<ProdState>;
  Production: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Production']>;
  Proof: ResolverTypeWrapper<Proof>;
  ProofHistory: ResolverTypeWrapper<ProofHistory>;
  ProofPeriod: ResolverTypeWrapper<ProofPeriod>;
  ProofSource: ResolverTypeWrapper<ProofSource>;
  Query: ResolverTypeWrapper<{}>;
  Sons: ResolverTypeWrapper<Sons>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  Bull: Bull;
  DamProduction: DamProduction;
  Date: Scalars['Date']['output'];
  Designation: Designation;
  DtrAvgProduction: DtrAvgProduction;
  Float: Scalars['Float']['output'];
  Genotype: Genotype;
  Haplotypes: Haplotypes;
  HealthTests: HealthTests;
  Identities: Identities;
  Int: Scalars['Int']['output'];
  Lineage: Lineage;
  LineageInput: LineageInput;
  MarketingGroup: MarketingGroup;
  Meta: Meta;
  NaabCode: NaabCode;
  ProdState: ProdState;
  Production: ResolversInterfaceTypes<ResolversParentTypes>['Production'];
  Proof: Proof;
  ProofHistory: ProofHistory;
  ProofPeriod: ProofPeriod;
  ProofSource: ProofSource;
  Query: {};
  Sons: Sons;
  String: Scalars['String']['output'];
}>;

export type BullResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bull'] = ResolversParentTypes['Bull']> = ResolversObject<{
  Breed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  BreedGroup?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  BreedSort?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Controller?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  Country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DamProduction?: Resolver<Maybe<Array<Maybe<ResolversTypes['DamProduction']>>>, ParentType, ContextType>;
  DateOfBirth?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  Designations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Designation']>>>, ParentType, ContextType>;
  DtrAvgProduction?: Resolver<Maybe<Array<Maybe<ResolversTypes['DtrAvgProduction']>>>, ParentType, ContextType>;
  Gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Genotypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Genotype']>>>, ParentType, ContextType>;
  GlobalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Haplotypes?: Resolver<Maybe<ResolversTypes['Haplotypes']>, ParentType, ContextType>;
  HealthTests?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthTests']>>>, ParentType, ContextType>;
  Identities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Identities']>>>, ParentType, ContextType>;
  IsDead?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  Lineage?: Resolver<Maybe<Array<Maybe<ResolversTypes['Lineage']>>>, ParentType, ContextType, Partial<BullLineageArgs>>;
  MarketingGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['MarketingGroup']>>>, ParentType, ContextType>;
  Meta?: Resolver<Maybe<Array<Maybe<ResolversTypes['Meta']>>>, ParentType, ContextType>;
  NaabCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  NaabCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['NaabCode']>>>, ParentType, ContextType>;
  ProdState?: Resolver<Maybe<ResolversTypes['ProdState']>, ParentType, ContextType>;
  Proof?: Resolver<Maybe<Array<Maybe<ResolversTypes['Proof']>>>, ParentType, ContextType>;
  ProofHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProofHistory']>>>, ParentType, ContextType>;
  ProofPeriod?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProofPeriod']>>>, ParentType, ContextType>;
  ProofSource?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProofSource']>>>, ParentType, ContextType>;
  Recessives?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  RegId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  RegName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ReleaseDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  ShortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  SireStack?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Sons?: Resolver<Maybe<Array<Maybe<ResolversTypes['Sons']>>>, ParentType, ContextType>;
  UpdateDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  YoungSire?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DamProductionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DamProduction'] = ResolversParentTypes['DamProduction']> = ResolversObject<{
  DisplayOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  Format?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  FormattedValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  LegacyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Published?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  Type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ValueKg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ValueLb?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DesignationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Designation'] = ResolversParentTypes['Designation']> = ResolversObject<{
  ActivateDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  ExpireDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  Label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  LegacyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DtrAvgProductionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DtrAvgProduction'] = ResolversParentTypes['DtrAvgProduction']> = ResolversObject<{
  DisplayOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  Format?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  FormattedValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  LegacyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Published?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  Type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ValueKg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ValueLb?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GenotypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Genotype'] = ResolversParentTypes['Genotype']> = ResolversObject<{
  Description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  LegacyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HaplotypesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Haplotypes'] = ResolversParentTypes['Haplotypes']> = ResolversObject<{
  MarketingHaplotype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HealthTestsResolvers<ContextType = any, ParentType extends ResolversParentTypes['HealthTests'] = ResolversParentTypes['HealthTests']> = ResolversObject<{
  LegacyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  TestDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  TestName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  TestResult?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentitiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Identities'] = ResolversParentTypes['Identities']> = ResolversObject<{
  Identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Origin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LineageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Lineage'] = ResolversParentTypes['Lineage']> = ResolversObject<{
  Generation?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ParentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  RegId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  RegName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Relationship?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MarketingGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketingGroup'] = ResolversParentTypes['MarketingGroup']> = ResolversObject<{
  Action?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ActionDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  ActivateDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  ExpireDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  Name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Meta'] = ResolversParentTypes['Meta']> = ResolversObject<{
  Meta?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NaabCodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NaabCode'] = ResolversParentTypes['NaabCode']> = ResolversObject<{
  DisplayOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  NaabCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Published?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  Sexed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProdStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProdState'] = ResolversParentTypes['ProdState']> = ResolversObject<{
  BarnCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  BarnStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  IsEU?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  IsIsolation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  IsLaughterHouse?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  IsLayoff?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  IsProduction?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  Location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  MoveDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ResidencyDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  State?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Production'] = ResolversParentTypes['Production']> = ResolversObject<{
  __resolveType: TypeResolveFn<'DamProduction' | 'DtrAvgProduction', ParentType, ContextType>;
  DisplayOrder?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  Format?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  FormattedValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  LegacyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Published?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  Type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ValueKg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ValueLb?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type ProofResolvers<ContextType = any, ParentType extends ResolversParentTypes['Proof'] = ResolversParentTypes['Proof']> = ResolversObject<{
  Category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Format?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  IsPublished?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  LegacyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Trait?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProofHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProofHistory'] = ResolversParentTypes['ProofHistory']> = ResolversObject<{
  ProofDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProofPeriodResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProofPeriod'] = ResolversParentTypes['ProofPeriod']> = ResolversObject<{
  EvalCountry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  EvalDateEnd?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  EvalDateStart?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  EvalType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProofSourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProofSource'] = ResolversParentTypes['ProofSource']> = ResolversObject<{
  Description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  SourceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  Bull?: Resolver<ResolversTypes['Bull'], ParentType, ContextType, RequireFields<QueryBullArgs, 'id'>>;
}>;

export type SonsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sons'] = ResolversParentTypes['Sons']> = ResolversObject<{
  ChildId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  NaabCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  RegId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  RegName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Relationship?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ShortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  TPI?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Bull?: BullResolvers<ContextType>;
  DamProduction?: DamProductionResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Designation?: DesignationResolvers<ContextType>;
  DtrAvgProduction?: DtrAvgProductionResolvers<ContextType>;
  Genotype?: GenotypeResolvers<ContextType>;
  Haplotypes?: HaplotypesResolvers<ContextType>;
  HealthTests?: HealthTestsResolvers<ContextType>;
  Identities?: IdentitiesResolvers<ContextType>;
  Lineage?: LineageResolvers<ContextType>;
  MarketingGroup?: MarketingGroupResolvers<ContextType>;
  Meta?: MetaResolvers<ContextType>;
  NaabCode?: NaabCodeResolvers<ContextType>;
  ProdState?: ProdStateResolvers<ContextType>;
  Production?: ProductionResolvers<ContextType>;
  Proof?: ProofResolvers<ContextType>;
  ProofHistory?: ProofHistoryResolvers<ContextType>;
  ProofPeriod?: ProofPeriodResolvers<ContextType>;
  ProofSource?: ProofSourceResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Sons?: SonsResolvers<ContextType>;
}>;

