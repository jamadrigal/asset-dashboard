import React, { useState } from "react";
import Asset from "./Asset";

interface SubcategoryProps {
  name: string;
  balance: number;
  asset: any;

  openAssetModal: (a: any) => void;
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
        onClick={() => setIsOpen(!isOpen)}
      >
        <td className="border px-4 py-2 font-medium text-left pl-8">
          <span className="mr-2">{isOpen ? "▼" : "▶"}</span>
          {name}
        </td>
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
