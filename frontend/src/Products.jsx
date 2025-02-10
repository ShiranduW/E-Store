import ProductCards from "./ProductCards";
import { Separator } from "@/components/ui/separator";
import { useGetProductsQuery, useGetCategoriesQuery } from "@/lib/api";
import Tab from "./Tab";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "./components/ui/skeleton";


function Products() {
  
  // Using a query hook automatically fetches data and returns query values
  const { 
    data:products, 
    isLoading:isProductsLoading ,
    isError:isproductsError, 
    error:productsError  
  } = useGetProductsQuery();

  const { 
    data:categories, 
    isLoading:isCategoriesLoading ,
    isError:isCategoriesError, 
    error:categoriesError  
  } = useGetCategoriesQuery();

  

  // const [products, setProducts] = useState([]);
  // const [isProductsLoading, setIsProductsLoading] = useState(true);
  // const [productsError, setProductsError] = useState({
  //   isError: false,
  //   message: "",
  // });

  // const categories = [
  //   { _id: "ALL", name: "All" },
  //   { _id: "1", name: "Headphones" },
  //   { _id: "2", name: "Earbuds" },
  //   { _id: "3", name: "Speakers" },
  //   { _id: "4", name: "Mobile Phones" },
  //   { _id: "5", name: "Smart Watches" },
  // ];

  const [selectedCategoryId, setSelectedCategoryId] = useState("ALL");
  const filteredProducts =
    selectedCategoryId === "ALL"
      ? products
      : products.filter((product) => product.categoryId === selectedCategoryId);

  const handleTabClick = (_id) => {
    setSelectedCategoryId(_id);
  };

  // useEffect(() => {
  //   getProducts()
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((error) => {
  //       setProductsError({ isError: true, message: error.message });
  //     })
  //     .finally(() => setIsProductsLoading(false));
  // }, []);

  if (isProductsLoading || isCategoriesLoading) {
    return (
      <section className="px-8 py-8">
        <h2 className="text-4xl font-bold">Our Top Products</h2>

        <Separator className="mt-2" />
        <div className="mt-4 flex items-center gap-4">
        <Skeleton className="h-80" />
          {/* {categories.map((category) => (
            <Tab
              key={category._id}
              _id={category._id}
              selectedCategoryId={selectedCategoryId}
              name={category.name}
              onTabClick={handleTabClick}
            />
          ))} */}
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <Skeleton className="h-80" />
          <Skeleton className="h-80" />
          <Skeleton className="h-80" />
          <Skeleton className="h-80" />
        </div>
      </section>
    );
  }

  if (isproductsError || isCategoriesError) {
    return (
      <section className="px-8 py-8">
        <h2 className="text-4xl font-bold">Our Top Products</h2>

        <Separator className="mt-2" />
        <div className="mt-4 flex items-center gap-4">
          {/* {categories.map((category) => (
            <Tab
              key={category._id}
              _id={category._id}
              selectedCategoryId={selectedCategoryId}
              name={category.name}
              onTabClick={handleTabClick}
            />
          ))} */}
        </div>
        <div className="mt-4">
        <p className="text-red-500">
  {productsError?.message || categoriesError?.message}
</p>

        </div>
      </section>
    );
  }

  return (
    <section className="px-8 py-8">
      <h2 className="text-4xl font-bold">Our Top Products</h2>
      <Separator className="mt-2" />
      <div className="mt-4 flex items-center gap-4">
        {[...categories, { _id: "ALL", name: "All" }].map((category) => (
          <Tab
            key={category._id}
            _id={category._id}
            selectedCategoryId={selectedCategoryId}
            name={category.name}
            onTabClick={handleTabClick}
          />
        ))}
      </div>
      <ProductCards products={filteredProducts} />
    </section>
  );
}

export default Products;



    



    