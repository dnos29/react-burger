import React from 'react';
import AuxHoc from '../../hoc/AuxHoc';

const Layout = (props) => (
  <AuxHoc>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main>
      {props.children}
    </main>
  </AuxHoc>
)


export default Layout;

