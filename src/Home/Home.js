import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';

function Home() {
  return (
    <Fragment>
      <Header />
      <ProductList />
    </Fragment>
  );
}

export default Home;
