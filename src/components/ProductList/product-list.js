import React from 'react';
import css from './product-list.module.scss';

import ProductItem from 'src/components/ProductItem/product-item';


function ProductList ({ products=[] }) {

  return (
        <div className={css.wrap}>
          {products.map((product) => <ProductItem product={product}/>)}
        </div>
    )
}

export default ProductList;
