import React, { useState, useEffect } from "react";

interface DetailsProps {
  info: string;
}

const Details: React.FC<DetailsProps> = ({ info }) => {
  const [assetsData, setAssetsData] = useState(null);

  useEffect(() => {
    try {
      const parsedData = JSON.parse(info);
      setAssetsData(parsedData);
    } catch (error) {
      console.error("Error parsing JSON", error);
    }
  }, [info]);

  if (!assetsData) {
    return <div>Loading...</div>;
  }

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

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Asset Details</h2>
      <div className="space-y-4">
        {assetsData &&
          Object.keys(assetsData).map((key) => {
            if (
              assetsData[key] === "" ||
              assetsData[key] === null ||
              assetsData[key] === undefined
            ) {
              return null;
            }

            if (key === "holdings") {
              return null;
            }

            if (key === "asOfDate") {
              return (
                <div key={key}>
                  <strong className="text-sm">{key.toUpperCase()}: </strong>
                  <span>{formatDate(assetsData[key])}</span>
                </div>
              );
            }

            if (key === "estimateValue" || key === "purchaseCost") {
              return (
                <div key={key}>
                  <strong className="text-sm">{key.toUpperCase()}: </strong>
                  <span>${assetsData[key]}</span>
                </div>
              );
            }

            if (typeof assetsData[key] === "boolean") {
              return (
                <div key={key}>
                  <strong className="text-sm">{key.toUpperCase()}: </strong>
                  <span>{assetsData[key] ? "Yes" : "No"}</span>
                </div>
              );
            }

            return (
              <div key={key}>
                <strong className="text-sm">
                  {key.toUpperCase()}: {"  "}
                </strong>
                <span>{assetsData[key]}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Details;
