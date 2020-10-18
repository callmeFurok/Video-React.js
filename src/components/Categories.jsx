import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (
  <div classname="categories">
    <h3 classname="categories__title">{title}</h3>
    {children}
  </div>
);

export default Categories;
