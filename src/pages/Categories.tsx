import CustomMarque from "@/components/CustomMarque";
import React from "react";

const categoriesData = [{title : String},{title : String},{title : String},{title : String},{title : String}]

const Categories = () => {
  return (
    <div className="h-screen w-screen m-2 p-2">
      <CustomMarque MarqueDataObj={categoriesData} />
    </div>
  );
};

export default Categories;
