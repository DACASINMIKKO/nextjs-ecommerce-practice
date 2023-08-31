import React from "react";
import Image from "next/image";
import greaterThanSymbol from "../../public/greaterThanSymbol.png";

const FilterSidebar = () => {
  const filtersItem = [
    { name: "T-shirts" },
    { name: "Shorts" },
    { name: "Shirts" },
    { name: "Hoodie" },
    { name: "Jeans" },
  ];
  return (
    <div className="p-5 w-1/4 bg-red-200 flex flex-col justify-between">
      <div>
        <div className="mb-3">Filters</div>
        <div className="flex flex-col py-3 border-y-2 border-gray-400 gap-2">
          {filtersItem.map((item) => (
            <div
              className="flex justify-between align-middle cursor-pointer"
              key={item.name}
            >
              {item.name}
              <Image
                src={greaterThanSymbol}
                width={12}
                height={12}
                alt="greaterThanSymbol"
              />
            </div>
          ))}
        </div>
      </div>
      <div>Price</div>
      <div>Colors</div>
      <div>Style</div>
      <div>Dress Style</div>
    </div>
  );
};

export default FilterSidebar;
