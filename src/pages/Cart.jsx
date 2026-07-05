import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";

const Cart = () => {
  const cartItems=useSelector((state)=> state.cart.cartItems);
  
  const sum=cartItems.reduce((accumulator,item)=>{
    return accumulator+(item.price * item.quantity);
  },0)
  if(cartItems.length===0)
  {
    return <h1>
      Cart Empty
      </h1>
  }
  return (
    <div>
      <div>
        {cartItems.map((product)=>{
          return <CartItems key={product.id} products={product}/>
        })}
      </div>
      <div className="flex items-center justify-around px-5 py-4 mt-4 border-t border-zinc-200">
        <span className="text-5xl font-bold text-zinc-600">Total:</span>
        <span className="text-3xl font-bold text-zinc-800">
          ${sum.toFixed(2)}
        </span>
      </div>
    </div>
  )
}

export default Cart
