import React, { Component } from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
  let transformedIngredient = Object.keys(props.ingredients).map(igKey => {
    return Array(props.ingredients[igKey]).fill(igKey)
  }).flat().map((ingredient, idx) => {
    return (<BurgerIngredient key={ingredient + idx} type={ingredient} />)
  });
  if(transformedIngredient.length === 0){
    transformedIngredient = <p>Please add ingredients!</p>
  }
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredient}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default Burger;
