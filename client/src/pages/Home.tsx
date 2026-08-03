import Top from "../components/top/Top";
import Services from "../components/services/Services";
import BrandStory from "../components/brand/BrandStory";
import Products from "../components/products/Products";
import Subscribe from "../components/subscribe/SubscribeSection";

export default function Home() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <Top />

      <Services />

      <BrandStory />

      <Products />

      <Subscribe />
    </div>
  );
}
