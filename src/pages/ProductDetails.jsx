import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/Api";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [product, setproduct] = useState({});
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    async function getProductDetails() {
      try {
        setloading(true);
        seterror(null);
        const data = await getProduct(params.id);
        setproduct(data);
      } catch (err) {
        seterror(
          "Failed to load product. Please check your internet connection."
        );
        console.log(err);
      } finally {
        setloading(false);
      }
    }
    getProductDetails();
  }, [params.id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="shrink-0 w-full md:w-96 h-96 md:h-120 bg-zinc-50 rounded-2xl p-8 flex items-center justify-center border border-zinc-100">
          <img className="max-h-full max-w-full object-contain"
            src={product.image}/>
        </div>

        <div className="flex flex-col gap-4 flex-1 min-w-0">
          <span className="inline-block self-start text-xs font-medium uppercase tracking-wider text-zinc-400 bg-zinc-100 px-3 py-1 rounded-full">{product.category}</span>

          <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 leading-tight">{product.title}</h1>

          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span className="text-amber-400 text-base">★</span>
            <span className="font-medium text-zinc-700">{product.rating.rate}</span>
            <span className="text-zinc-300">|</span>
            <span>{product.rating.count} reviews</span>
          </div>

          <p className="text-3xl font-bold text-zinc-900">${product.price}</p>

          <p className="text-zinc-500 leading-relaxed mt-1">{product.description}</p>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="mt-4 w-fit px-8 py-3.5 bg-zinc-900 text-white font-medium rounded-xl hover:bg-zinc-700 active:scale-[0.97] transition-all duration-200 cursor-pointer">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;