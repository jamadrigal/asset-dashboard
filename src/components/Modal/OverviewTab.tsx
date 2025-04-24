import React from "react";
import { formatDate } from "../../utils/date";
import { Asset } from "../../types/asset";

interface OverviewTabProps {
  asset: Asset;
  netWorth: number;
}

const OverviewTab: React.FC<OverviewTabProps> = ({ asset, netWorth }) => {
  return (
    <div className="flex gap-x-8 w-full">
      <div className="w-full p-4 border border-gray-200 text-left rounded-md ml-2">
        <div>Current Value</div>
        <h1 className="text-xl">
          $
          {asset.balanceCurrent.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h1>
        <div>As of {formatDate(asset.balanceAsOf)}</div>
      </div>
      <div className="p-4 w-full border border-gray-200 text-left rounded-md">
        <div>Net Worth</div>
        <h1 className="text-xl">
          $
          {netWorth.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h1>
        <div>Included in net worth</div>
      </div>
    </div>
  );
};

export default OverviewTab;
