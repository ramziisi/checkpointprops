import React from 'react';
import PropTypes from 'prop-types';
function ProductsTable ({products}) {
    
    return(
      <div className="az">
        <table>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>category</th>
          </tr>
          {products.map(el => <tr>
          <td>{el.name}</td>
          <td>{el.price}</td>
          <td>{el.category}</td>
          </tr>)}
          {/* <>name:{products.map(prod=><tr>{prod.name}</tr>)}</td>
          <td>price:{products.map(prod=><tr>{prod.price}</tr>)}</td>
          <td>category:{products.map(prod=><tr>{prod.category}</tr>)}</td> */}
        </table>
   
   </div>
      )

}
export default ProductsTable;