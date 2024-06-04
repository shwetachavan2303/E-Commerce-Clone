// import {useState,useEffect} from 'react'
// import './Cart.css'
// import GooglePayButton from '@google-pay/button-react'
// const Cart = ({cart,setCart,handleChange}) => {

//   const[price,setPrice]=useState(0)
  
//   function handleRemove(id){
//     const arr= cart.filter(item=>item.id !==id)
//     setCart(arr)
//   }

//   function handlePrice(){
//     let ans=0
//     cart.map(item=>ans+=item.price*item.amount)
//     setPrice(ans)

//   }

//   useEffect(()=>{
//     handlePrice()
//   })
//   return (
//     <div className="cart">
//       <table border={1} style={{width:'100%' ,textAlign:'center'}} rules='all'>
//        <thead>
//        <tr >
//           <th>Image</th>
//           <th>Name</th>
//           <th>Incr</th>
//           <th>Qty</th>
//           <th>Decr</th>
//           <th>Price</th>
//            <th>Remove</th>
//         </tr>
//        </thead>
//        <tbody>
//         {
//           cart && cart.map((item)=>{
//             return(
//               <tr key={item.id}>
//                 <td><img src={item.image} alt="" style={{height:"50px", width:"50px", borderRadius:'50%'}}></img></td>
//                 <td>{item.title}</td>
//                 <td><button onClick={()=>handleChange(item,i)}>+</button></td>
                
//                 <td>{item.amount}</td>
//                 <td><button onClick={()=>handleChange(item,i)}>-</button></td>
//                 <td >{item.price}</td>
//                 <td><button onClick={handleRemove(item.id)}>Remove</button></td>
//               </tr>
//             )
//           })
//         }
//        </tbody>
//        <tfoot>
//         <tr>
//           <td>The Total price</td>
//           <td colSpan={5}>{price}Rs</td>
//           <td><button><GooglePayButton
//   environment="TEST"
//   paymentRequest={{
//     apiVersion: 2,
//     apiVersionMinor: 0,
//     allowedPaymentMethods: [
//       {
//         type: 'CARD',
//         parameters: {
//           allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
//           allowedCardNetworks: ['MASTERCARD', 'VISA'],
//         },
//         tokenizationSpecification: {
//           type: 'PAYMENT_GATEWAY',
//           parameters: {
//             gateway: 'example',
//             gatewayMerchantId: 'exampleGatewayMerchantId',
//           },
//         },
//       },
//     ],
//     merchantInfo: {
//       merchantId: '12345678901234567890',
//       merchantName: 'Demo Merchant',
//     },
//     transactionInfo: {
//       totalPriceStatus: 'FINAL',
//       totalPriceLabel: 'Total',
//       totalPrice: '100.00',
//       currencyCode: 'USD',
//       countryCode: 'US',
//     },
//   }}
//   onLoadPaymentData={paymentRequest => {
//     console.log('load payment data', paymentRequest);
//   }}
// /></button></td>
//         </tr>
//        </tfoot>
//       </table>
//     </div>
//   )
// }

// export default Cart



import { useState, useEffect } from 'react';
import './Cart.css';
import GooglePayButton from '@google-pay/button-react';

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  function handleRemove(id) {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  }

  function handlePrice() {
    let ans = 0;
    cart.forEach((item) => (ans += item.price * item.amount));
    setPrice(ans);
  }

  useEffect(() => {
    handlePrice();
  }, [cart]); // Include 'cart' as a dependency to avoid infinite loop

  return (
    <div className="cart">
      <table border={1} style={{ width: '100%', textAlign: 'center' }} rules="all">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Incr</th>
            <th>Qty</th>
            <th>Decr</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart &&
            cart.map((item, i) => {
              return (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt="" style={{ height: '50px', width: '50px', borderRadius: '50%' }}></img>
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <button onClick={() => handleChange(item, 1)}>+</button>
                  </td>

                  <td>{item.amount}</td>
                  <td>
                    <button onClick={() => handleChange(item, -1)}>-</button>
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
        <tfoot>
          <tr>
            <td>The Total price</td>
            <td colSpan={5}>{price}Rs</td>
            <td>
              <button>
              <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/>
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
