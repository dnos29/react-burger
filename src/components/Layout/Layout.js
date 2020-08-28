import React from 'react';
import AuxHoc from '../../hoc/AuxHoc';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = (props) => (
  <AuxHoc>
    <Toolbar></Toolbar>
    <SideDrawer />
    <main className={classes.mt16}>
      {props.children}
    </main>
  </AuxHoc>
)


export default Layout;

