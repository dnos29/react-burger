import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
]

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <div>Total price: <strong>{props.totalPrice}</strong></div>
    { 
      controls.map(control => (
        <BuildControl 
          key={control.label} 
          label={control.label} 
          type={control.type} 
          addIngredient={props.addIngredient}
          removeIngredient={props.removeIngredient}
          disableInfo={props.disableInfo[control.type] }/>
      ))
    }
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.purchasing}
    >
      ORDER NOW
    </button>
  </div>
)
export default BuildControls;