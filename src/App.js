import React, { Fragment } from 'react';
import Header from './header/Header';
import ProductList from './product-list/ProductList';


function App() {
  return (
    <div className="App">
      <Fragment>
        <Header />
        <ProductList />
      </Fragment>
    </div>
  );
}

export default App;
