"use client";

import productImage from "../../public/product-tshirt.png";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Star from "../../public/Star.png";
import HalfStar from "../../public/HalfStar.png";
import styles from "./ProductsComponent.module.css";
import useSWR from "swr";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "@/redux/store/features/productSlice";

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .catch((e) => {
      return notFound();
    });

const ProductsComponent = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const router = useRouter();

  const generateStars = (rating) => {
    const star = [];
    const floorRating = Math.floor(rating);
    for (let i = 0; i < floorRating; i++) {
      star.push(
        <Image key={Math.random() * 100} src={Star} layout="intrinsic" />
      );
    }
    if (rating % 1 !== 0) {
      star.push(
        <Image key={Math.random() * 100} src={HalfStar} layout="intrinsic" />
      );
    }
    return star;
  };

  const { data, error, isLoading } = useSWR(
    category
      ? `http://localhost:5000/products?category=${category}`
      : "http://localhost:5000/products",
    fetcher
  );

  useEffect(() => {
    if (data) {
      dispatch(getProducts(data));
    }
  }, [data]);

  const [displayedProducts, setDisplayedProducts] = useState([]);
  useEffect(() => {}, []);

  console.log(products);

  if (error) return <div>Error loading data</div>;
  if (isLoading) return <div>Loading data...</div>;

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[20px]">
      {products.map((product) => (
        <div className="" key={product.id} onClick={() => {}}>
          <Image
            className="rounded-[20px] mb-[16px] border-2 border-gray-300 hover:cursor-pointer hover:border-gray-500"
            src={productImage}
            height={298}
            width={295}
            alt="productImage"
          />
          <div className="mb-[8px] text-[#000] text-[20px] font-[700]">
            <p className="hover:cursor-pointer hover:font-[800]">
              {product.name}
            </p>
          </div>
          <div className={styles.rating}>
            <div className="flex">{generateStars(product.rating)}</div>
            <div>{"3.5/5"}</div>
          </div>
          <div className="text-[#000] text-[24px] font-[700]">
            {"$" + product.price}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsComponent;
