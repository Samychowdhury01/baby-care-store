import Categories from "@/components/categories/Categories";
import { TCategory } from "@/types";
import React from "react";

const CategoriesPage = async () => {

  const res = await fetch(
    `${process.env.PRODUCTION_SERVER as string}/categories`
  );

  const { data: categories } = await res.json();

  console.log(categories, "line 8");
  return (
    <div className="mt-8 p-5 md:p-0">
      {categories?.map((category: TCategory) => (
        <Categories key={category._id} category={category} />
      ))}
  
    </div>
  );
};

export default CategoriesPage;
