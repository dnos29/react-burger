import React from 'react'
import CustomButton from '../../UI/CustomButton/CustomButton'

const OrderSummary = (props) => {
  let orderDetails = Object.keys(props.ingredients).map(igKey => {
    return <li key={igKey}>{igKey} : {props.ingredients[igKey]}</li>
  })
  return (<div>
    <h3>Your order</h3>
    <ul>
      {orderDetails}
    </ul>
    <p><strong>Total price: {props.totalPrice}</strong></p>
    <p>Continue to checkout?</p>
    <CustomButton btnType='Danger' clicked={props.cancelPurchasing}>
      CANCEL
    </CustomButton>
    <CustomButton btnType='Success' clicked={props.continueShopping}>
      CONTINUE
    </CustomButton>
  </div>)

}
export default OrderSummary;