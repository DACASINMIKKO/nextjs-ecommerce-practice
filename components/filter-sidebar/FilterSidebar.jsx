"use client";

import React, { useState } from "react";
import Image from "next/image";
import greaterThanSymbol from "../../public/greaterThanSymbol.png";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { filterByPrice } from "@/redux/store/features/productSlice";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .catch((e) => {
      return notFound();
    });

const FilterSidebar = () => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:5000/products",
    fetcher
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleFilterProducts = () => {
    if (minPrice <= maxPrice) {
      const price = {
        data: data,
        min: minPrice,
        max: maxPrice,
      };
      dispatch(filterByPrice(price));
    } else {
      console.log("min price cannot be higher than max price");
    }
  };

  const filtersItem = [
    { name: "T-shirts" },
    { name: "Shorts" },
    { name: "Shirts" },
    { name: "Hoodie" },
    { name: "Jeans" },
  ];

  const handleCategoryFilter = (category) => {
    router.push(`/products?category=${category}`);
  };

  return (
    <div className="mb-[20px] p-5 w-1/5 bg-white flex flex-col justify-between border-2 border-[#0000001A] rounded-lg h-[550px]">
      <div>
        <div className="mb-[24px] font-bold text-[20px]">Filters</div>
        <div className="flex flex-col py-[24px] border-y-2 border-[#0000001A] gap-2">
          {filtersItem.map((item) => (
            <div
              className="flex justify-between align-middle cursor-pointer"
              key={item.name}
              onClick={() => {
                handleCategoryFilter(item.name.toLowerCase());
              }}
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
      <div className="py-[24px] flex flex-col justify-center">
        <div className="mb-[24px] font-bold text-[20px]">Price</div>
        <div>
          <div>Min:</div>
          <input
            type="number"
            className="border-2 border-[#0000001A] rounded-md outline-none w-[100%]"
            onChange={handleMinPriceChange}
            value={minPrice}
          />
          <div>Max:</div>
          <input
            type="number"
            className="border-2 border-[#0000001A] rounded-md outline-none w-[100%]"
            onChange={handleMaxPriceChange}
            value={maxPrice}
          />
        </div>
      </div>
      <div>
        <button
          className="h-[48px] bg-black align-middle text-white w-[100%] rounded-[62px] text-[18px] font-[800]"
          onClick={handleFilterProducts}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
