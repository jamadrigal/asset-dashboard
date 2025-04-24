import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ASSETS } from "../../apollo/queries";
import Category from "./Category";
import AssetModal from "../Modal/AssetModal";
import {
  groupAssetsByCategory,
  calculateCategoryTotal,
} from "../../utils/groupAssets";
import { formatCurrency } from "../../utils/currency";
import { Asset } from "../../types/asset";

const AssetTable: React.FC = () => {
  const { data, loading, error } = useQuery(GET_ASSETS, {
    variables: { wid: "ae0df17e-514e-4f52-a0b5-5bfb1adf84c9" },
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  const openAssetModal = (asset: Asset) => {
    setIsOpen(true);
    setSelectedAsset(asset);
  };
  const closeAssetModal = () => {
    setIsOpen(false);
    setSelectedAsset(null);
  };

  const assets = data?.getAssets || [];
  //no assets
  if (assets.length === 0) return <p>No assets yet.</p>;

  // Group assets by category
  const groupedAssets = groupAssetsByCategory(assets);

  // Calculate total net worth
  const totalNetWorth = calculateCategoryTotal(assets);

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
          {Object.entries(groupedAssets).map(([category, categoryAssets]) => (
            <Category
              key={category}
              name={category}
              assets={categoryAssets}
              balanceCurrent={calculateCategoryTotal(categoryAssets)}
              openAssetModal={openAssetModal}
            />
          ))}
          <tr className="bg-gray-200 font-bold">
            <td className="border px-4 py-2 text-left pl-4">Total Net Worth</td>
            <td className="border px-4 py-2 text-right font-bold">
              ${formatCurrency(totalNetWorth)}
            </td>
          </tr>
        </tbody>
      </table>
      {isOpen && selectedAsset && (
        <AssetModal
          asset={selectedAsset}
          netWorth={totalNetWorth}
          onClose={closeAssetModal}
        />
      )}
    </div>
  );
};

export default AssetTable;
