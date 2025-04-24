import { Asset, AssetClass } from "../types/asset";

interface GroupedAssets {
  [key: string]: Asset[];
}

export const groupAssetsByCategory = (assets: Asset[]): GroupedAssets => {
  return assets.reduce((acc: GroupedAssets, asset: Asset) => {
    const category = asset.primaryAssetCategory;

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(asset);
    return acc;
  }, {});
};

export const calculateCategoryTotal = (assets: Asset[]): number => {
  return assets.reduce(
    (total, asset) => total + (asset.balanceCurrent || 0),
    0
  );
};

export const calculateMajorClassTotal = (
  assetClasses: AssetClass[]
): number => {
  return assetClasses.reduce((total, holding) => total + holding.value, 0);
};
