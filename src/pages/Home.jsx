import { useEffect, useState } from "react"
import { products } from "../services/Api";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Home = () => {
  const [productList, setproductList] = useState([])
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState(null)

  useEffect(()=>{
      async function getProducts(){
        try{
          setloading(true);
          seterror(null);
          const data= await products();
          setproductList(data);
          // console.log(data);
        }catch(err){
          seterror("Failed to load products. Please check your internet connection.");
          console.log(err);
        }finally{
          setloading(false);
        }
      }
      getProducts();
    },[])
  
  if(loading)
  {
    return <Loading/>
  }
  if(error)
  {
    return <Error error={error}/>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10 mt-10">
      {productList.map((e)=>{
        return <ProductCard key={e.id} product={e} />
      })}
    </div>
  )
}

export default Home
