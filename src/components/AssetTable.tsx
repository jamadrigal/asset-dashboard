import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ASSETS } from "../apollo/queries";
import Category from "./Category";
import AssetModal from "./Modal/AssetModal";

const AssetTable: React.FC = () => {
  const { data, loading, error } = useQuery(GET_ASSETS, {
    variables: { wid: "ae0df17e-514e-4f52-a0b5-5bfb1adf84c9" },
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedAsset, setSelectedAsset] = useState<any | null>(null);

  const onSelectedAsset = (asset: any) => setSelectedAsset(asset);

  const openAssetModal = (asset: any) => {
    setIsOpen(true);
    setSelectedAsset(asset);
  };
  const closeAssetModal = () => {
    setIsOpen(false);
    setSelectedAsset(null);
  };

  const assets = data?.getAssets || [];

  if (loading) return <p className="text-center">Loading assets...</p>;
  if (error)
    return <p className="text-red-500 text-center">Error loading data!</p>;

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-400">
            <th className="border border-gray-300 px-4 py-2 text-left">
              Category/Subcategory/Asset
            </th>
            <th className="border border-gray-300 px-4 py-2 text-right">
              Balance
            </th>
          </tr>
        </thead>

        <tbody>
          {assets.map((asset: any) => (
            <Category
              key={asset.assetId}
              name={asset.primaryAssetCategory}
              asset={asset}
              balanceCurrent={asset.balanceCurrent}
              wealthAssetType={asset.wealthAssetType}
              openAssetModal={openAssetModal}
              onSelectedAsset={onSelectedAsset}
            />
          ))}
        </tbody>
      </table>
      {isOpen && <AssetModal asset={selectedAsset} onClose={closeAssetModal} />}
    </div>
  );
};

export default AssetTable;
