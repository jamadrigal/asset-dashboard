import React from "react";

interface AssetProps {
  name: string;
  balance: number;
  asset: any;
  openAssetModal: (a: any) => void;
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
        {balance && (
          <span>
            $
            {balance.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        )}
      </td>
    </tr>
  );
};

export default Asset;
