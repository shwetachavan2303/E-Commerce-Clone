// import './Navbar.css'
// const Navbar = (setShow,setSearch) => {
//   return (
//     <div className="">
//       <nav className="navbar">
//         <div>More🤩Shop</div>
//         <div onClick={()=>setShow(true)}>Home</div>
//         <div>About</div>
//         <div>Contact</div>
//         <div><input type="search" name="" id="" placeholder='search product' onChange={(e)=>setSearch(e.target.value)}/></div>
//         <div onClick={()=>setShow(false)}>Cart🛒</div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar




// import './Navbar.css';
// // import cart from '../Cart/Cart'
// const Navbar = ({ setShow, setSearch,cartSize,setShow2}) => {

//   const handleMore=()=>{
//     setShow(true)
//     setShow2(prev => prev ? true : true)
//   }
  
//   const handleCart=()=>{
//     setShow(false)
//     setShow2(prev => prev ? true : true)

//   }
//   return (
//     <div className="">
//       <nav className="navbar">
//         <div onClick={() => {handleMore}}>More🤩Shop</div>
//         <div >Home</div>
//         <div>About</div>
//         <div>Contact</div>
//         <div>
//           <input
//             type="search"
//             name=""
//             id=""
//             placeholder='search a product here'
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>
//         <div onClick={() =>{handleCart}}>Cart<sup>{cartSize}</sup>🛒</div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;



import './Navbar.css';
// import cart from '../Cart/Cart'

const Navbar = ({ setShow, setSearch, cartSize, setShow2 }) => {
  const handleMore = () => {
    setShow(true);
    setShow2((prev) => (prev ? true : true));
  };

  const handleCart = () => {
    setShow(false);
    setShow2((prev) => (prev ? true : true));
  };

  return (
    <div className="">
      <nav className="navbar">
        <div onClick={handleMore}>More🤩Shop</div>
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
        <div>
          <input
            type="search"
            name=""
            id=""
            placeholder="search a product here"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div onClick={handleCart}>
          Cart<sup>{cartSize}</sup>🛒
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
