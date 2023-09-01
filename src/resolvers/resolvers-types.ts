import { GraphQLResolveInfo } from 'graphql';
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
};

export type Bull = {
  __typename?: 'Bull';
  Breed?: Maybe<Scalars['String']['output']>;
  BreedGroup?: Maybe<Scalars['String']['output']>;
  BreedSort?: Maybe<Scalars['String']['output']>;
  Controller?: Maybe<Scalars['Int']['output']>;
  Country?: Maybe<Scalars['String']['output']>;
  DateOfBirth?: Maybe<Scalars['String']['output']>;
  Gender: Scalars['String']['output'];
  GlobalId: Scalars['String']['output'];
  IsDead?: Maybe<Scalars['Boolean']['output']>;
  Lineage?: Maybe<Array<Maybe<Lineage>>>;
  NaabCode?: Maybe<Scalars['String']['output']>;
  Recessives?: Maybe<Scalars['String']['output']>;
  RegId: Scalars['String']['output'];
  RegName?: Maybe<Scalars['String']['output']>;
  ReleaseDate?: Maybe<Scalars['String']['output']>;
  ShortName?: Maybe<Scalars['String']['output']>;
  SireStack?: Maybe<Scalars['String']['output']>;
  Sons?: Maybe<Array<Maybe<Sons>>>;
  UpdateDate?: Maybe<Scalars['String']['output']>;
  YoungSire?: Maybe<Scalars['String']['output']>;
};

export type Cow = {
  __typename?: 'Cow';
  Country?: Maybe<Scalars['String']['output']>;
  DateOfBirth?: Maybe<Scalars['String']['output']>;
  Gender: Scalars['String']['output'];
  GlobalId: Scalars['String']['output'];
  IsDead?: Maybe<Scalars['Boolean']['output']>;
  RegId: Scalars['String']['output'];
  RegName?: Maybe<Scalars['String']['output']>;
  Sons?: Maybe<Array<Maybe<Sons>>>;
  UpdateDate?: Maybe<Scalars['String']['output']>;
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

export type Query = {
  __typename?: 'Query';
  Bull: Bull;
  Sons?: Maybe<Array<Maybe<Sons>>>;
};


export type QueryBullArgs = {
  id: Scalars['String']['input'];
};


export type QuerySonsArgs = {
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



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Bull: ResolverTypeWrapper<Bull>;
  Cow: ResolverTypeWrapper<Cow>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Lineage: ResolverTypeWrapper<Lineage>;
  Query: ResolverTypeWrapper<{}>;
  Sons: ResolverTypeWrapper<Sons>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  Bull: Bull;
  Cow: Cow;
  Int: Scalars['Int']['output'];
  Lineage: Lineage;
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
  DateOfBirth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  GlobalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  IsDead?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  Lineage?: Resolver<Maybe<Array<Maybe<ResolversTypes['Lineage']>>>, ParentType, ContextType>;
  NaabCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Recessives?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  RegId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  RegName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ReleaseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ShortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  SireStack?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Sons?: Resolver<Maybe<Array<Maybe<ResolversTypes['Sons']>>>, ParentType, ContextType>;
  UpdateDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  YoungSire?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CowResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cow'] = ResolversParentTypes['Cow']> = ResolversObject<{
  Country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DateOfBirth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  GlobalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  IsDead?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  RegId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  RegName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Sons?: Resolver<Maybe<Array<Maybe<ResolversTypes['Sons']>>>, ParentType, ContextType>;
  UpdateDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  Bull?: Resolver<ResolversTypes['Bull'], ParentType, ContextType, RequireFields<QueryBullArgs, 'id'>>;
  Sons?: Resolver<Maybe<Array<Maybe<ResolversTypes['Sons']>>>, ParentType, ContextType, RequireFields<QuerySonsArgs, 'id'>>;
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
  Cow?: CowResolvers<ContextType>;
  Lineage?: LineageResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Sons?: SonsResolvers<ContextType>;
}>;

