import axios from 'axios';

export async function products()
{
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
}
export async function getProduct(id)
{
    const response= await axios.get(`https://fakestoreapi.com/products/${id}`)
    return response.data;
}