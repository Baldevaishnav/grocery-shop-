import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { removeQuantity } from "../Redux/shoppingcartSlice";
import { Link } from "react-router-dom";

const Shoppingcart_Product = () => {
   
const {cart} = useSelector(state => state.Cart);
const {total} = useSelector(state => state.Cart);
console.log(total)

const dispatch =  useDispatch();


  return (

    <>
  
  { cart.length > 0   ?  
      
      <div>

       

      
            
          <div className="flex justify-center">
       <table className="w-[80%]">
              <thead>
                <tr className="text-left text-xl border-b-2 ">
                  <th className="text-left p-3">Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
                <br />
              </thead>
              <tbody>
                   {
                      cart.map(item =>{
                         return(
                            <tr className="border-b-2">
                            <td className="flex items-center gap-3 py-4">
                              <img src={item.img} className="h-[10rem]" alt="" />
                              <p className="text-lg">{item.name}</p>
                            </td>
          
                            <td>
                              <span className="font-extrabold">${item.price}</span>
                            </td>
          
                            <td>
                              <div className="bg-gray-200  w-24 flex justify-around p-2  ">
                                <button >-</button>
                                <span>{item.qauntity}</span>
                                <button >+</button>
                              </div>
                            </td>
          
                            <td className="">
                              <span className="font-extrabold">${item.subtotal}</span>
                              <button className="bg-gray-100 p-1 ml-2" onClick={()=>{dispatch(removeQuantity(item))}}>
                                <RxCross2 />
                              </button>
                            </td>
                          </tr>
                         )
                      })
                   }
                <br />

                
              </tbody>
            </table>
             
        </div> 
         <br />
         <br />
         <div className="">
           <div className="flex justify-between mx-40 ">
             <button className="bg-gray-100 text-gray-500 font-bold text-sm shadow-lg p-4  tracking-[2px]">
               CONTINUE SHOPPING
             </button>
             <button className="bg-gray-100 text-gray-500 font-bold text-sm shadow-lg p-4 tracking-[2px] ">
               UPDATE CART
             </button>
           </div>
           <div className=" flex justify-center gap-36 mt-10">
             <div className="">
               <h1 className="text-xl font-bold ">Discount Codes</h1>
               <br />
               <div>
                 <input
                   type="text"
                   className="outline-none input_border  w-72 p-3 mr-2 "
                   placeholder="Enter your coupon code"
                 />
                 <button className="text-white bg-gray-500 font-bold w-56 text-[12px]  p-4 tracking-[3px]">
                   {" "}
                   APPLY COUPON
                 </button>
               </div>
             </div>
             <div className="w-[40%] bg-gray-100  p-10">
               <h1 className="text-2xl font-extrabold mt-2">Cart Total</h1>
               <ul className="flex justify-between mt-6">
                 <li className="text-xl font-bold">Subtotal</li>
                 <li className="text-xl text-red-500 font-semibold">
                  $ {total}
                 </li>
               </ul>
               <ul className="flex justify-between  pt-4 ">
                 <li className="text-lg font-bold">total</li>
                 <li className="text-xl text-red-500 font-semibold">
                $ {total}
                 </li>
               </ul> <br />
               <Link to='checkout' className="bg-lime-600 p-2 text-white w-full mt-6" >
                 PROCEED TO CHECKOUT
               </Link>
             </div>
           </div>
         </div>
         </div>: <span className="text-3xl flex justify-center">Empty cart</span>  } 
         </>

  );
};

export default Shoppingcart_Product;
