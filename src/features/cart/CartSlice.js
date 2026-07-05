import {createSlice} from '@reduxjs/toolkit'
let saved=[];
const data=localStorage.getItem("storage");
if(data)
{
    saved=JSON.parse(data);
}

const cartSlice= createSlice({
    name:"shoppingCart",
    initialState:{
        cartItems:saved,
    },
    reducers:{
        addToCart(state,action){
            const existing=state.cartItems.find((item)=>{
                return item.id === action.payload.id;
            });
            if(existing)
            {
                existing.quantity++;
            }
            else{
                state.cartItems.push({...action.payload,quantity:1});
            }
            localStorage.setItem("storage",JSON.stringify(state.cartItems));
        },
        removeFromCart(state,action){
            const newCart=state.cartItems.filter((item)=>{
                return item.id != action.payload.id;
            })
            state.cartItems=newCart;
            localStorage.setItem("storage",JSON.stringify(state.cartItems));
        },
        decreaseQuantity(state,action){
            const present=state.cartItems.find((item)=>{
                return item.id === action.payload.id
            })
            if(present)
            {
                if(present.quantity>1){
                    present.quantity--;
                }
                else{
                    const temp=state.cartItems.filter((item)=>{
                        return item.id != action.payload.id;
                    })
                    state.cartItems=temp;
                }
                localStorage.setItem("storage",JSON.stringify(state.cartItems));
            }
        }
    }
})
export const {addToCart,removeFromCart,decreaseQuantity}=cartSlice.actions;
export default cartSlice.reducer;