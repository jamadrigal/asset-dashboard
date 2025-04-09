import React, { useState } from "react";
import Subcategory from "./Subcategory";

interface CategoryProps {
  name: string;
  balanceCurrent: number;
  wealthAssetType: string;
  asset: any;
  openAssetModal: (a: any) => void;
  onSelectedAsset: (a: any) => void;
}

const Category: React.FC<CategoryProps> = ({
  name,
  balanceCurrent,
  wealthAssetType,
  asset,
  openAssetModal,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <React.Fragment>
      <tr
        className="cursor-pointer bg-gray-50 hover:bg-gray-300"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <td className="border px-4 py-2 font-medium text-left pl-4">
          <span className="mr-2">{isOpen ? "▼" : "▶"}</span>
          <strong>{name}</strong>
        </td>
        <td className="border px-4 py-2 text-right font-semibold">
          $
          {balanceCurrent.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </td>
      </tr>
      {isOpen && wealthAssetType && (
        <React.Fragment>
          <Subcategory
            name={wealthAssetType}
            balance={asset.balanceQuantityCurrent}
            openAssetModal={openAssetModal}
            asset={asset}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Category;
