import React, { useState } from "react";
import { Asset as AssetType } from "../../types/asset";
import Subcategory from "./Subcategory";
import { formatCurrency } from "../../utils/currency";
import { formatKey } from "../../utils/format";

interface CategoryProps {
  name: string;
  balanceCurrent: number;
  assets: AssetType[];
  openAssetModal: (asset: AssetType) => void;
}

const Category: React.FC<CategoryProps> = ({
  name,
  balanceCurrent,
  assets,
  openAssetModal,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <React.Fragment>
      <tr
        className="cursor-pointer hover:bg-gray-300 bg-gray-50"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <td className="border px-4 py-2 font-medium text-left pl-4">
          <span className="mr-2">{isOpen ? "▼" : "▶"}</span>
          <strong>{formatKey(name)}</strong>
        </td>
        <td className="border px-4 py-2 text-right text-semibold">
          ${formatCurrency(balanceCurrent)}
        </td>
      </tr>

      {isOpen &&
        assets.map((asset) => (
          <React.Fragment key={asset.assetId}>
            <Subcategory
              name={asset.wealthAssetType}
              balance={asset.balanceCurrent}
              openAssetModal={openAssetModal}
              asset={asset}
            />
          </React.Fragment>
        ))}
    </React.Fragment>
  );
};

export default Category;
