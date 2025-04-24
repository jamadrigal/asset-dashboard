import React from "react";
import { formatCurrency } from "../../utils/currency";

interface HoldingProps {
  name: string;
  value: number;
  percent: number;
}

const Holdings: React.FC<HoldingProps> = ({ name, value, percent }) => {
  return (
    <tr className="">
      <td className="border text-left pl-10">{name}</td>
      <td className="border text-right">${formatCurrency(value)}</td>
      <td className="border text-right">{percent.toFixed(1)}%</td>
    </tr>
  );
};

export default Holdings;
