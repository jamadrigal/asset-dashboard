import React from "react";

interface HoldingsTabProps {
  holdings: any;
}

const HoldingsTab: React.FC<HoldingsTabProps> = ({ holdings }) => {
  const assets = holdings?.majorAssetClasses || [];
  let totalValue = 0;

  return (
    <div className="flex">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-400">
            <th className="border  px-4 py-2 text-left">Asset Class</th>
            <th className="border  px-4 py-2 text-right">Value</th>
            <th className="border  px-4 py-2 text-right">% of Total</th>
          </tr>
        </thead>

        <tbody>
          {assets &&
            assets.map((asset: any) => {
              const majorClass = asset?.assetClasses || [];
              return majorClass.map((major: any, index: number) => {
                totalValue += Math.abs(major.value);
                return (
                  <tr key={index}>
                    <td className="border px-4 py-2 font-medium text-left pl-4">
                      {major.minorAssetClass}
                    </td>
                    <td className="border px-4 py-2 text-right">
                      $
                      {major.value.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="border px-4 py-2 text-right">
                      {Math.floor((major.value / totalValue) * 100)}%
                    </td>
                  </tr>
                );
              });
            })}
        </tbody>
      </table>
    </div>
  );
};

export default HoldingsTab;
