import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProducts,
} from "../features/products/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector(selectProducts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const productsList = products?.map((product) => (
    <div
      className="w-[200px] h-[200px] flex flex-col items-center justify-between gap-3 border border-[whitesmoke] m-4 p-4 bg-[whitesmoke] rounded"
      key={product.id}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-12 h-16 bg-none"
      />
      <div className="">
        <h4 className="">{product.title.substring(0, 30)}</h4>
        <p className="text-sm text-gray-500">£{product.price}</p>
      </div>
    </div>
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
