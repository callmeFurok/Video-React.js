import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children }) => (
  <div classname="categories">
    <h3 classname="categories__title">Mi lista</h3>
    {children}
  </div>
);

export default Categories;
