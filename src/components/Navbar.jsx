import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const myCart = useSelector((state) => state.cart.cartItems);

  return (
    <div className="w-full sticky top-0 z-50 bg-slate-900 text-slate-100 py-4 px-10 flex justify-between items-center border-b-2 border-indigo-600/30">
      <div className="flex gap-5 ml-5 items-center">
        <img className="h-18 w-18 " src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/shopping-cart-white-icon.png" />
        <Link to='/' className="text-[45px] font-extrabold tracking-wide hover:text-indigo-400 transition-colors">
          Shopee<span className="text-indigo-500">.</span>
        </Link>
      </div>

      <div className="flex items-center mr-5 gap-10 text-[28px] font-medium">
        <Link to='/' className="hover:text-indigo-400 hover:underline duration-200 transition-all relative ">
          Home
        </Link>
        <Link to='/cart' className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-bold transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20">
          Cart ({myCart.length})
        </Link>
      </div>
    </div>
  );
};

export default Navbar;