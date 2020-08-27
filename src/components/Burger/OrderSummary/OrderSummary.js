import React from 'react'

const OrderSummary = (props) => {
  let orderDetails = Object.keys(props.ingredients).map(igKey => {
    return <li key={igKey}>{igKey} : {props.ingredients[igKey]}</li>
  })
  return (<div>
    <h3>Your order</h3>
    <ul>
      {orderDetails}
    </ul>
    <p>Continue to checkout?</p>
  </div>)

}
export default OrderSummary;