import React, { useState } from "react";
import HoldingsTab from "./HoldingsTab";
import Details from "./Details";

interface AssetModalProps {
  asset: any;
  onClose: () => void;
}

const AssetModal: React.FC<AssetModalProps> = ({ asset, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");

  const formatDate = (dateS: string) => {
    if (!dateS) return "";
    const d = new Date(dateS);
    const formattedDate = d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  const holdings = asset?.holdings || [];

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-slate-50 p-6 rounded-md w-full min-h-[50vh] max-h-[80vh] overflow-y-auto">
        <div className="relative  p-4">
          <button onClick={onClose} className="absolute top-2 right-2">
            X
          </button>
        </div>
        <h1 className="text-xl font-bold text-left">
          {asset.primaryAssetCategory}
        </h1>
        <div className="text-l text-left py-2">
          {" "}
          {asset.wealthAssetType} &#8226; {asset.nickname}{" "}
        </div>

        <div className="flex space-x-8 p-2 rounded-md bg-gray-200 w-full">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-2 px-4 text-gray-800 w-full ${
              activeTab === "overview" ? "bg-gray-50 text-black rounded-md" : ""
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("holdings")}
            className={`py-2 px-4 w-full text-gray-800 ${
              activeTab === "holdings" ? "bg-gray-50 text-black rounded-md" : ""
            }`}
          >
            Holdings
          </button>
          <button
            onClick={() => setActiveTab("details")}
            className={`py-2 px-4 text-gray-800 w-full ${
              activeTab === "details" ? "bg-gray-50 text-black rounded-md" : ""
            }`}
          >
            Details
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === "overview" && (
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
                  {asset.balanceCurrent.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </h1>
                <div>Included in Networth</div>
              </div>
            </div>
          )}
          {activeTab === "holdings" && (
            <div>
              {holdings && holdings.length !== 0 ? (
                <div>
                  <HoldingsTab holdings={holdings} />
                </div>
              ) : (
                <div className="p-10 border border-gray-200 text-center rounded-md ">
                  No holdings
                </div>
              )}
            </div>
          )}
          {activeTab === "details" && (
            <div>
              <Details info={asset.assetInfo} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssetModal;
