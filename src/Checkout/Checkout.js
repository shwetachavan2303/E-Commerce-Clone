
// import Data from '../Data'
// const Checkout = (id) => {
//     const actualData=Data.filter((item)=>item.id ===id)
//   return (
//     <div className='Checkout'>
//       <div className='right'>
//       <img src={actualData[0].image} height={'auto'} width={'70%'}></img>
//       </div>
//       <div className='left'>
//         <h1>{actualData[0].title}</h1>
//         <p>{actualData[0].price}</p>
//         <p>{actualData[0].rating.rate}</p>
//         <p>{actualData[0].description}</p>
//         <button>CheckOut</button>
//       </div>
//     </div>
//   )
// }

// export default Checkout
import React from 'react';
import Data from '../Data';
import GooglePayButton from '@google-pay/button-react';
const Checkout = ({ id }) => {
  const actualData = Data.filter((item) => item.id === id);

  return (
    <div className='Checkout'>
      <div className='right'>
        <img src={actualData[0].image} height={'auto'} width={'70%'} alt={actualData[0].title} />
      </div>
      <div className='left'>
        <h1>{actualData[0].title}</h1>
        <p>{actualData[0].price}</p>
        <p>{actualData[0].rating.rate}</p>
        <p>{actualData[0].description}</p>
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
      </div>
    </div>
  );
};

export default Checkout;
