import React, { useContext, useEffect, useState } from "react";
import fetchCategoryWiseProduct from "../helpers/fetchCategoryWiseProduct";
import displayINRCurrency from "../helpers/displayCurrency";
import { Link } from "react-router-dom";
import addToCart from "../helpers/addToCart";
import Context from "../context";

const VerticalCardProduct = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(13).fill(null);

  const { fetchUserAddToCart } = useContext(Context);

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
  };

  const fetchData = async () => {
    setLoading(true);
    const categoryProduct = await fetchCategoryWiseProduct(category);
    setLoading(false);
    console.log("vertical data", categoryProduct.data);
    setData(categoryProduct?.data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 my-6">
      <h2 className="text-2xl font-semibold py-4">{heading}</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Loading skeletons */}
        {loading
          ? loadingList.map((_, index) => (
              <div
                key={`loading-${index}`} // ✅ Added key for skeletons
                className="bg-white rounded-sm shadow flex flex-col"
              >
                <div className="bg-slate-200 h-40 w-full animate-pulse"></div>
                <div className="p-3 grid gap-2 w-full">
                  <h2 className="h-4 bg-slate-200 rounded-full animate-pulse"></h2>
                  <p className="h-4 bg-slate-200 rounded-full animate-pulse"></p>
                  <div className="flex gap-3 w-full">
                    <p className="h-4 bg-slate-200 rounded-full animate-pulse w-full"></p>
                    <p className="h-4 bg-slate-200 rounded-full animate-pulse w-full"></p>
                  </div>
                  <button className="h-6 bg-slate-200 rounded-full animate-pulse w-full"></button>
                </div>
              </div>
            ))
          : data.map((product, index) => (
              <Link
                key={product?._id || `product-${index}`} // ✅ Added key for products
                to={`product/${product?._id}`}
                className="bg-white rounded-sm shadow flex flex-col"
              >
                <div className="bg-slate-200 h-40 w-full flex items-center justify-center">
                  <img
                    src={product.productImage[0]}
                    alt={product?.productName}
                    className="object-scale-down h-full hover:scale-110 transition-all"
                  />
                </div>
                <div className="p-3 grid gap-1">
                  <h2 className="font-medium text-base text-ellipsis line-clamp-1 text-black">
                    {product?.productName}
                  </h2>
                  <p className="capitalize text-slate-500">{product?.category}</p>
                  <div className="flex gap-3">
                    <p className="text-red-600 font-medium">
                      {displayINRCurrency(product?.sellingPrice)}
                    </p>
                    <p className="text-slate-500 line-through">
                      {displayINRCurrency(product?.price)}
                    </p>
                  </div>
                  <button
                    className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full"
                    onClick={(e) => handleAddToCart(e, product?._id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default VerticalCardProduct;
