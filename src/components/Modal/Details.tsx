import React from "react";
import { formatDate } from "../../utils/date";
import { formatKey } from "../../utils/format";
import { parseAssetInfo } from "../../utils/parse";

interface DetailsProps {
  info: string;
}

const Details: React.FC<DetailsProps> = ({ info }) => {
  const assetsData = parseAssetInfo(info);

  if (!assetsData) {
    return (
      <div className="p-10 border border-gray-200 text-center rounded-md">
        Loading...
      </div>
    );
  }

  const renderValue = (key: string, value: any) => {
    if (value === "" || value === null || value === undefined) {
      return null;
    }

    if (key === "holdings") {
      return null;
    }

    if (key === "asOfDate") {
      return <span>{formatDate(value)}</span>;
    }

    if (key === "estimateValue" || key === "purchaseCost") {
      return <span>${value.toLocaleString()}</span>;
    }

    if (typeof value === "boolean") {
      return <span>{value ? "Yes" : "No"}</span>;
    }

    return <span>{value}</span>;
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        Asset Details
      </h2>
      <div className="space-y-4">
        {Object.entries(assetsData).map(([key, value]) => {
          const formattedValue = renderValue(key, value);
          if (!formattedValue) return null;

          return (
            <div
              key={key}
              className="flex justify-between items-start py-2 border-b border-gray-100 last:border-0"
            >
              <span className="text-sm font-medium text-gray-600">
                {formatKey(key)}
              </span>
              <span className="text-sm text-gray-800">{formattedValue}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
