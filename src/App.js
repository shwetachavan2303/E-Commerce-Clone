
import { useState } from "react"
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
const App = () => {
  const [show, setShow] = useState(true);
  const [search, setSearch] = useState("");
   const[cart,setCart]=useState([])
   const[show2,setShow2]=useState(true)
   const[id,setId]=useState("")

   function handleClick(item){
     setCart([...cart,item])
   }

   function handleChange(item,d){
    let arr=cart
    let ind = cart.indexOf(item)
    arr[ind].amount+=d
    setCart([...cart])
   }
  return (
    <div>
      <Navbar  setShow2={setShow2}  cartSize={cart.length} setShow={setShow} setSearch={setSearch} />
      {(show2)? (show) ? (<Home setId={setId} setShow2={setShow2} search={search} handleClick={handleClick} />): (<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>):(<Checkout id={id}/>)}
    </div>
  );
};

export default App;