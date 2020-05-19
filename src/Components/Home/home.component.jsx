import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header/header.component';
import ProductList from '../ProductList/product-list.component';

const Home = () => {
  return (
    <Fragment>
        <Header />
        <ProductList />
    </Fragment>
  );
};

export default Home;
