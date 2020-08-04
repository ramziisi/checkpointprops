import React from 'react';
import PropTypes from 'prop-types';
//import logo from './logo.svg';
import ProductsTable from './Comtable';
import './App.css';

const products = [
  {name:'Frozen yoghurt',price : 159.15, category : "aa"},
  {name :'Frozen yoghurt',price : 159.15, category : "aa"},
  {name :'Frozen yoghurt',price : 159.15, category : "aa"},
  {name :'Frozen yoghurt',price : 159.15, category : "aa"},
  {name :'Frozen yoghurt',price : 159.15, category : "aa"},
  
];

function App(name, price ,category ) {
  return <div>
    <ProductsTable products={products}/>
  </div>;
}





export default App;
