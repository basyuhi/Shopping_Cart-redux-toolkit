import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";

// could have also passed props and then props.product everywhere jaha pe use mei lena tha
const ProductCard = ({product}) => {
  const dispatch=useDispatch();

  // console.log(product)
  return (
      <div className="flex flex-col rounded-xl justify-between transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl p-4 bg-zinc-100">
      
        <Link to={`/product/${product.id}`} > 
            <img className="h-75 hover:bg-zinc-300 hover:scale-105 active:scale-95 transition-all duration-300 rounded-xl p-3 w-full object-contain" src={product.image} />
        </Link>

        <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-700"></div>
            <span className="px-3 text-xl font-bold text-black uppercase tracking-widest">Details</span>
            <div className="flex-1 border-t border-gray-700"></div>
        </div>
        <div className="gap-2 flex items-center flex-col">
            <h1 className="line-clamp-2 text-xl">{product.title}</h1>
            <p className="text-2xl text-center font-bold">${product.price}</p>
            <p className="text-lg text-center font-semibold">⭐ {product.rating.rate} ({product.rating.count})</p>
            <p className="capitalize text-center text-shadow-2xs text-lg">{product.category}</p>
        </div>
        <div className="flex justify-center">
            <button onClick={()=>{
              dispatch(addToCart(product))
            }}
             className="flex items-center mt-3 bg-black transition-all duration-200 hover:bg-gray-600 active:scale-90 text-white px-4 py-3 rounded-2xl">Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard
