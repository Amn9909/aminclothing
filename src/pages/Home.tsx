import CustomMarque from "@/components/CustomMarque";
import { SearchInput } from "@/components/CustomSerachInput";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";

const Home = () => {
  return (
    <div className=" h-screen">
      <div className="p-2 flex items-center justify-center">
        {/* <Input className="border-2 border-gray-400" /> */}
        <SearchInput />
        <ShoppingCart className="m-2" />
      </div>
    </div>
  );
};
export default Home;
