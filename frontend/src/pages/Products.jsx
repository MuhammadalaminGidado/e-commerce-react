import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProducts,
  selectProducts,
} from "../features/products/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector(selectProducts);

  useEffect(() => {
    const cachedTime = localStorage.getItem("products_timestamp");
    const isCacheValid = cachedTime && Date.now() - cachedTime < 86400000;
    if (status === "idle" && (!products || !isCacheValid)) {
      dispatch(fetchProducts());
    }
  }, [dispatch, status, products]);
  // TODO add react icons
  const productsList = products?.map((product) => (
    <Link key={product.id} to="/products/:id">
      <div className="w-[200px] h-[200px] flex flex-col items-center text-center justify-evenly gap-3 border border-[whitesmoke] m-4 p-2 bg-[whitesmoke] rounded shadow-md cursor-pointer">
        <img
          src={product.images[0]}
          alt={product.title}
          className={`bg-none h-12`}
        />
        <div className="w-[100px]">
          <h4 className="text-sm">{product.title.substring(0, 30)}</h4>
          <p className="text-[12px] text-gray-500">£{product.price}</p>
        </div>
      </div>
    </Link>
  ));
  if (status == "loading") {
    return <div className="ml-auto">Loading...</div>;
  }

  if (status == "failed") {
    return <div>Error: {error}</div>;
  }
  return <div className="flex items-center flex-wrap">{productsList}</div>;
};

export default Products;
