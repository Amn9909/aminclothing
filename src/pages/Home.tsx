import { Input } from "@/components/ui/input";
import { CarrotIcon, ShoppingCart } from "lucide-react";


const Home = () => {
  return (
    <div className="h-full w-full bg-gray-800 rounded-xl">
     



     {/* full screen search bar  */}

     <div className="p-2 flex ">
        <Input />
        <ShoppingCart className="m-2" />
     </div>

    </div>
  );
};
export default Home;
