import React, { Component } from 'react'
import AuxHoc from '../../hoc/AuxHoc'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const BURGER_PRICES = {
  salad: 0.5,
  meat: 1,
  cheese: 0.5,
  bacon: 1,
}
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
    },
    totalPrice: 4,
  }
  addIngredientHander = (type) => {
    let ingredientCount = this.state.ingredients[type];
    const updateIngredient = {...this.state.ingredients};
    updateIngredient[type] = ++ingredientCount;
    const oldPrice = this.state.totalPrice;
    let newPrice = oldPrice + BURGER_PRICES[type];
    this.setState({
      ingredients: updateIngredient,
      totalPrice: newPrice,
    })
  }

  removeIngredientHander = (type) => {
    let ingredientCount = this.state.ingredients[type];
    if(ingredientCount <= 0) return;
    const updateIngredient = {...this.state.ingredients};
    updateIngredient[type] = --ingredientCount;
    const oldPrice = this.state.totalPrice;
    let newPrice = oldPrice - BURGER_PRICES[type];
    this.setState({
      ingredients: updateIngredient,
      totalPrice: newPrice,
    })
  }
  render() {
    let disableInfo = {};
    for(let key in this.state.ingredients){
      disableInfo[key] = this.state.ingredients[key] <= 0;
    }
    return (
      <AuxHoc>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHander}
          removeIngredient={this.removeIngredientHander}
          disableInfo={disableInfo}
        />
        <p>Total price: {this.state.totalPrice}</p>
      </AuxHoc>
    )
  }
}
export default BurgerBuilder;