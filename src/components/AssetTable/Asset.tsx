import React from "react";
import { Asset as AssetType } from "../../types/asset";
import { formatCurrency } from "../../utils/currency";

interface AssetProps {
  name: string;
  balance: number;
  asset: AssetType;
  openAssetModal: (asset: AssetType) => void;
}

const Asset: React.FC<AssetProps> = ({
  name,
  balance,
  openAssetModal,
  asset,
}) => {
  return (
    <tr
      className="bg-white pl-10 cursor-pointer"
      onClick={() => openAssetModal(asset)}
    >
      <td className="border px-8 py-2 text-left pl-10">{name}</td>
      <td className="border px-4 py-2 text-right">
        ${formatCurrency(balance)}
      </td>
    </tr>
  );
};

export default Asset;
