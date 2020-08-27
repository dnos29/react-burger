import React, { Component } from 'react'
import AuxHoc from '../../hoc/AuxHoc'

class BurgerBuilder extends Component {
  render() {
    return (
      <AuxHoc>
        <div>Burger Builder</div>
        <div>Burger Controls</div>
      </AuxHoc>
    )
  }
}
export default BurgerBuilder;