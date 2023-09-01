import BrandsComponent from "@/components/brands/BrandsComponent";
import HomePageCover from "@/components/homepage-cover/HomePageCover";
import BottomCover from "@/components/bottom-cover/BottomCover";
import { notFound } from "next/navigation";

export default async function Home() {
  const products = await getProducts();

  if (!products) {
    notFound();
  }
  //console.log(products);

  const sortedProductsByDate = products.sort((a, b) => {
    return new Date(b.dateOfArrival) - new Date(a.dateOfArrival);
  });

  const newestArrivals = sortedProductsByDate.slice(0, 4);

  const sortedProductsBySale = products.sort((a, b) => {
    return new Date(b.sales) - new Date(a.sales);
  });

  const topSelling = sortedProductsBySale.slice(0, 4);
  return (
    <div>
      <HomePageCover />
      <BrandsComponent />
      <BottomCover title={"New Arrivals"} products={newestArrivals} />
      <BottomCover title={"Top Selling"} products={topSelling} />
    </div>
  );
}

export const getProducts = async () => {
  const response = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  if (!response.ok) return undefined;
  return response.json();
};
