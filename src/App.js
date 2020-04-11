import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navi from './navi/Navi';
import Header from './header/Header';
import Products from './products/Products';
import ProductList from './product-list/ProductList';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Navi />
        <Header />
        <Products />
        <ProductList />
      </Fragment>
    </div>
  );
}

export default App;
