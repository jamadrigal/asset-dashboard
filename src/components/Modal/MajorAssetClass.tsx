import React, { useState } from "react";
import Holdings from "./Holdings";
import { formatCurrency } from "../../utils/currency";
import { AssetClass } from "../../types/asset";
import { formatKey } from "../../utils/format";

interface MajorAssetClassProps {
  name: string;
  total: number;
  percentage: number;
  asset: any;
  currentBalance: number;
}

const MajorAssetClass: React.FC<MajorAssetClassProps> = ({
  name,
  total,
  percentage,
  asset,
  currentBalance,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(total !== 0);

  return (
    <React.Fragment>
      <tr
        className="bg-gray-200 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <td className="border font-medium text-left pl-4">
          <span className="mr-2">{isOpen ? "▼" : "▶"}</span>
          {name}
        </td>
        <td className="border text-right">${formatCurrency(total)}</td>
        <td className="border text-right">{percentage.toFixed(1)}%</td>
      </tr>
      {isOpen &&
        asset?.assetClasses.map((holding: AssetClass, index: number) => (
          <Holdings
            key={index}
            name={formatKey(holding.minorAssetClass)}
            value={holding.value}
            percent={(holding.value / currentBalance) * 100}
          />
        ))}
    </React.Fragment>
  );
};

export default MajorAssetClass;
