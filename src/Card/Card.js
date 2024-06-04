// import { useState } from 'react'
// import './Card.css';

// const Card = ({ item }) => {
//   const { price, description, rating, image, title } = item;
//   const[open,setOpen]=useState(false)
//   return (
//     <div className='cards'>
//       <div className='card'>
//         <img src={image} alt={title} />
//         <div className="card-content">
//           <h2>{title}</h2>
          
//           <p>Rating: {rating.rate} ({rating.count} reviews)</p>
//           <p>Price: ${price}</p>
//           <button onClick={()=>setOpen(!open)}>Read More</button>
//         {open && (
//              <div>
//                 <p>{description}</p>
//                 <button>Add cart</button>
//              <button onClick={()=>setOpen(!open)}>Close</button>
//              </div>
//         )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
// import { useState } from 'react';
// import './Card.css';

// const Card = ({ item ,handleClick,setShow2,setId}) => {
//   const { price, description, rating, image, title ,id} = item;
//   const [open, setOpen] = useState(false);

//   const handleImageClick=()=>{
//     setShow2(false)
//     setId(id)
//   }
//   return (
//     <div className='cards'>
//     <div className='card' >
//         <img onClick={()=>setShow2(handleImageClick)}  src={image} alt={title}  />
//         <div className="card-content">
//           <h2>{title}</h2>
//           <p>Rating: {rating.rate}⭐ ({rating.count} reviews)</p>
//           <p>Price: ${price}</p>
//           <button onClick={()=>setOpen(!open)}>Read More</button>
//           <button onClick={()=>handleClick(item)}>Add cart</button>
//         {open && (
//              <div>
//                 <p>{description}</p>
//              <button onClick={()=>setOpen(!open)}>Close</button>
             
//              </div>
//         )}
       
        
//         </div>
      
//       </div>
      
//     </div>
   
//   );
// };

// export default Card;


import { useState } from 'react';
import './Card.css';

const Card = ({ item, handleClick, setShow2, setId }) => {
  const { price, description, rating, image, title, id } = item;
  const [open, setOpen] = useState(false);

  const handleImageClick = () => {
    setShow2(false);
    setId(id);
  };

  return (
    <div className='cards'>
      <div className='card'>
        <img onClick={handleImageClick} src={image} alt={title} />
        <div className="card-content">
          <h2>{title}</h2>
          <p>Rating: {rating.rate}⭐ ({rating.count} reviews)</p>
          <p>Price: ${price}</p>
          <button onClick={() => setOpen(!open)}>Read More</button>
          
          {open && (
            <div>
              <p>{description}</p>
              <button onClick={() => setOpen(!open)}>Close</button>
              <button onClick={() => handleClick(item)}>Add to Cart</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
