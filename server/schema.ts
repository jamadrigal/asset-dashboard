import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Asset {
    id: ID!
    primaryAssetCategory: PrimaryAssetCategory!
  }

  type PrimaryAssetCategory {
    name: String!
    wealthAssetType: [WealthAssetType!]!
    balanceCurrent: Float!
  }

  type WealthAssetType {
    name: String!
    balance: Float!
    assets: [AssetDetail!]!
  }

  type AssetDetail {
    asset: String!
    balance: Float!
  }

  type Query {
    assets: [Asset!]!
  }
`;
