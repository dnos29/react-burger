import React, { Component } from 'react'
import AuxHoc from '../../hoc/AuxHoc'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
    }
  }
  render() {
    return (
      <AuxHoc>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger Controls</div>
      </AuxHoc>
    )
  }
}
export default BurgerBuilder;