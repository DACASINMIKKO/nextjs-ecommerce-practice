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
    <div className="mb-[20px] p-5 w-1/5 bg-white flex flex-col justify-between border-2 border-[#0000001A] rounded-lg">
      <div>
        <div className="mb-[24px] font-bold text-[20px]">Filters</div>
        <div className="flex flex-col py-[24px] border-y-2 border-[#0000001A] gap-2">
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
      <div className="border-b-2 border-[#0000001A] py-[24px] flex flex-col justify-center">
        <div className="mb-[24px] font-bold text-[20px]">Price</div>
        <div>
          <div>Min:</div>
          <input
            type="number"
            className="border-2 border-[#0000001A] rounded-md outline-none"
          />
          <div>Max:</div>
          <input
            type="number"
            className="border-2 border-[#0000001A] rounded-md outline-none"
          />
        </div>
      </div>
      <div className="border-b-2 border-[#0000001A] py-[24px]">Colors</div>
      <div>Style</div>
      <div>Dress Style</div>
    </div>
  );
};

export default FilterSidebar;
