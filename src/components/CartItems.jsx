import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/CartSlice";
import { addToCart } from "../features/cart/CartSlice";
import { decreaseQuantity } from "../features/cart/CartSlice";

function CartItems({ products }) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-6 p-5 border border-zinc-200 rounded-2xl bg-white hover:shadow-md transition-shadow duration-300">
      <div className="shrink-0 w-80 h-80 rounded-xl border-2 overflow-hidden bg-zinc-100">
        <img
          src={products.image}
          className="w-full h-full object-contain p-2"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          <h3 className="text-2xl font-semibold text-zinc-800 truncate leading-tight">
            {products.title}
          </h3>
          <p className="text-lg text-zinc-400 mt-1 capitalize">{products.category}</p>
          <p className="text-lg text-zinc-500 mt-1.5">
            ⭐ {products.rating.rate}{" "}
            <span className="text-zinc-300">|</span>{" "}
            <span className="text-zinc-400">{products.rating.count} reviews</span>
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-0.5 bg-zinc-100 rounded-lg overflow-hidden">
            <button
              onClick={() => dispatch(decreaseQuantity(products))}
              className="px-3 py-1.5 text-zinc-600 hover:bg-zinc-200 transition-colors text-[18px] font-medium">−</button>

            <span className="px-4 py-1.5 text-lg font-medium text-zinc-700 min-w-10 text-center">
              {products.quantity}
            </span>

            <button
              onClick={() => dispatch(addToCart(products))}
              className="px-3 py-1.5 text-zinc-600 hover:bg-zinc-200 transition-colors text-sm font-medium">+</button>
          </div>

          <p className="text-2xl font-bold mr-10 text-zinc-800">
            ${products.price}
          </p>
        </div>

        <button
          onClick={() => dispatch(removeFromCart(products))}
          className="mt-4 rounded-2xl backdrop-blur-2xl self-start bg-[#EF4444] text-2xl text-white px-3 py-1 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export default CartItems;