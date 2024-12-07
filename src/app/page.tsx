import BestSelling from "@/components/BestSelling";
import BrowsebyCategory from "@/components/BrowsebyCategory";
import DeliveryDetails from "@/components/DeliveryDetails";
import ExploreProducts from "@/components/ExploreProducts";
import FlashSales from "@/components/FlashSales";
import HeroSection from "@/components/HeroSection";
import NewArrival from "@/components/NewArrival";

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <FlashSales />
      <BrowsebyCategory />
      <BestSelling />
      <ExploreProducts />
      <NewArrival />
      <DeliveryDetails />
    </div>
  );
}
