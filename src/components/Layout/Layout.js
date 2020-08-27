import React from 'react';
import AuxHoc from '../../hoc/AuxHoc';
import classes from './Layout.module.css'

const Layout = (props) => (
  <AuxHoc>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main className={classes.mt16}>
      {props.children}
    </main>
  </AuxHoc>
)


export default Layout;

