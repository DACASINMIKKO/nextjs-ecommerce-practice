import BrandsComponent from "@/components/brands/BrandsComponent";
import HomePageCover from "@/components/homepage-cover/HomePageCover";
import styles from "./page.module.css";
import BottomCover from "@/components/bottom-cover/BottomCover";
import { productList } from "@/assets/list-of-products/productList";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const sortedProductsByDate = productList.sort((a, b) => {
    return new Date(b.dateOfArrival) - new Date(a.dateOfArrival);
  });

  const newestArrivals = sortedProductsByDate.slice(0, 4);

  const sortedProductsBySale = productList.sort((a, b) => {
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
