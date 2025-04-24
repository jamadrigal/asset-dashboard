import React from "react";
import { calculateMajorClassTotal } from "../../utils/groupAssets";
import MajorAssetClass from "./MajorAssetClass";

interface AssetClass {
  minorAssetClass: string;
  value: number;
}

interface MajorAssetClasses {
  assetClasses: AssetClass[];
  majorClass?: string;
}

interface HoldingsTabProps {
  holdings: {
    majorAssetClasses?: MajorAssetClasses[];
  };
  currentBalance: number;
}

const HoldingsTab: React.FC<HoldingsTabProps> = ({
  holdings,
  currentBalance,
}) => {
  const majorAssetClasses = holdings?.majorAssetClasses || [];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-400">
            <th className="border px-4 py-2 text-left">Asset Class</th>
            <th className="border px-4 py-2 text-right">Value</th>
            <th className="border px-4 py-2 text-right">% of Total</th>
          </tr>
        </thead>
        <tbody>
          {majorAssetClasses.map((asset, index: number) => {
            const majorClassTotal = calculateMajorClassTotal(
              asset.assetClasses
            );
            const majorClassPercentage =
              (majorClassTotal / currentBalance) * 100;
            return (
              <MajorAssetClass
                key={index}
                name={asset.majorClass || ""}
                total={majorClassTotal}
                percentage={majorClassPercentage}
                asset={asset}
                currentBalance={currentBalance}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HoldingsTab;
