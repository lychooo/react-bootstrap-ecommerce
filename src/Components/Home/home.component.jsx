import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header/header.component';
import ProductList from '../ProductList/product-list.component';

function Home() {
  return (
    <Fragment>
        <Header />
        <ProductList />
    </Fragment>
  );
}

export default Home;
