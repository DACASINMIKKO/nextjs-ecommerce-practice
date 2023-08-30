import BrandsComponent from "@/components/brands/BrandsComponent";
import HomePageCover from "@/components/homepage-cover/HomePageCover";
import BottomCover from "@/components/bottom-cover/BottomCover";

export default async function Home() {
  const products = await getProducts();
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
  try {
    const response = await fetch("http://localhost:5000/products", {
      cache: "no-store",
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
};
