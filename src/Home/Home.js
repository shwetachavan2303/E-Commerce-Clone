// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import Data from '../Data'
// import Card from '../Card/Card'
// const Home = ({search}) => {
//   return (
//     <div className="Home">
//         <Carousel>
//              {
//                 Data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
//                     return(
//                         <section style={{height:'600px',width:'80%',margin:'auto'}} key={item.id}><div>
//                         <img src={item.image} />
//                         <p className="legend">
//                             <h1>{item.title}</h1>
//                             <h1>{item.description}</h1>
//                             <p>{item.price}</p>
//                             <p>{item.ratig.rate}</p>
//                             <button>Add Cart</button>
//                         </p>
//                     </div></section>
//                     )
//                 })
//              }   
//         </Carousel>


//         <section>
//             {Data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
//                 return(
//                     <Card key={item.id} item={item} ></Card>
//                 )
//             })}
//         </section>
//     </div>
//   )
// }

// export default Home

// import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import Data from '../Data';
// import Card from '../Card/Card';
// import './Home.css'

// const Home = ({ search ,handleClick,setShow2,setId}) => {
//   return (
//     <div className="Home">
//       <Carousel>
//         {Data.filter((item) => item.category.toLowerCase().includes(search)).map((item) => {
//           return(
//             <section key={item.id} style={{ height: '600px', width: '80%', margin: 'auto' }}>
//             <div>
//               <img src={item.image} alt={item.title} />
//               <p className="legend">
//                 <h1>{item.title}</h1>
//                 <p>{item.description}</p>
//                 <p>Price: ${item.price}💰</p>
//                 <p>Rating: {item.rating.rate}⭐</p>
//                 <button onClick={()=>handleClick(item)}>Add to Cart</button>
//               </p>
//             </div>
//           </section>
//           )
//         }
          
//         )}
//       </Carousel>

//       <section className='sec'>
//         {Data.filter((item) => item.category.toLowerCase().includes(search)).map((item) => (
//           <Card setId={setId} key={item.id} item={item} handleClick={()=>handleClick(item)} setShow2={setShow2}/>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Data from '../Data';
import Card from '../Card/Card';
import './Home.css';

const Home = ({ search, handleClick, setShow2, setId }) => {
  return (
    <div className="Home">
      <Carousel>
        {Data.filter((item) => item.category.toLowerCase().includes(search)).map((item) => (
          <section key={item.id} style={{ height: '600px', width: '80%', margin: 'auto' }}>
            <div>
              <img src={item.image} alt={item.title} />
              <p className="legend">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>Price: ${item.price}💰</p>
                <p>Rating: {item.rating.rate}⭐</p>
                <button onClick={() => handleClick(item)}>Add to Cart</button>
              </p>
            </div>
          </section>
        ))}
      </Carousel>

      <section className='sec'>
        {Data.filter((item) => item.category.toLowerCase().includes(search)).map((item) => (
          <Card key={item.id} setId={setId} item={item} handleClick={()=>handleClick(item)} setShow2={setShow2} />
        ))}
      </section>
    </div>
  );
};

export default Home;
