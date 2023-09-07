"use client";

import FilterSidebar from "@/components/filter-sidebar/FilterSidebar";
import ProductsComponent from "@/components/productsComponent/ProductsComponent";
import React from "react";

const Products = () => {
  const handleFilter = () => {};
  return (
    <div className="px-[150px] flex justify-between">
      <FilterSidebar handleFilter={handleFilter} />
      <ProductsComponent />
    </div>
  );
};

export default Products;
