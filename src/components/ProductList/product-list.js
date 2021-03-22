import React from 'react';
import css from './product-list.module.scss';
import Grid from '@material-ui/core/Grid';

import ProductItem from 'src/components/ProductItem/product-item';


function ProductList ({ products=[] }) {

  return (
        <div className={css.wrap}>
          {products.map((product) => 
            <div  key={product.id} className={css.productCardItem}>
              <ProductItem product={product}/>
            </div>
          )}
        </div>
    )
}

export default ProductList;
