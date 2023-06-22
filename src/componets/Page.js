import { Link } from "react-router-dom"

const Page = () => {
  
     
  return (
       
 
    <div className="flex flex-col">   
            <Link to="ShoppingDetails" className="hover:bg-gray-900 hover:text-lime-600">Shopping Details </Link>
            <Link to="Shoppingcart" className="hover:bg-gray-900 hover:text-lime-600"> Shopping cart</Link>
            <Link to="checkout" className="hover:bg-gray-900 hover:text-lime-600">CheckOut</Link>
         
    </div>
  )
}

export default Page