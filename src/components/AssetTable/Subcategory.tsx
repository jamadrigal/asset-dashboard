import React, { useState } from "react";
import { Asset as AssetType } from "../../types/asset";
import Asset from "./Asset";
import { formatCurrency } from "../../utils/currency";
import { formatKey } from "../../utils/format";

interface SubcategoryProps {
  name: string;
  balance: number;
  asset: AssetType;
  openAssetModal: (asset: AssetType) => void;
}

const Subcategory: React.FC<SubcategoryProps> = ({
  name,
  balance,
  asset,
  openAssetModal,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <React.Fragment>
      <tr
        className="cursor-pointer hover:bg-gray-300"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <td className="border px-4 py-2 font-medium text-left pl-8">
          <span className="mr-2">{isOpen ? "▼" : "▶"}</span>
          {formatKey(name)}
        </td>
        <td className="border px-4 py-2 text-right">
          ${formatCurrency(balance)}
        </td>
      </tr>

      {isOpen && (
        <React.Fragment>
          <Asset
            name={asset.nickname}
            balance={asset.balanceCurrent}
            openAssetModal={openAssetModal}
            asset={asset}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Subcategory;
