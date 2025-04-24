export interface AssetClass {
  minorAssetClass: string;
  value: number;
}

export interface MajorAssetClass {
  assetClasses: AssetClass[];
}

export interface Asset {
  assetId: string;
  nickname: string;
  balanceCurrent: number;
  balanceQuantityCurrent: number;
  primaryAssetCategory: string;
  wealthAssetType: string;
  balanceAsOf?: string;
  holdings?: {
    majorAssetClasses: MajorAssetClass[];
  };
  assetInfo?: any;
  // Add other asset properties as needed
}
