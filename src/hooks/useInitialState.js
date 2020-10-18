/**
 * Este elemento no lleva la extension jsx
 * ya que no va a manejar nada de HTML por eso
 * se queda como un elemento de JS puro, adicional a eso
 * aqui vamos a crear Hooks custom siguendo lo que aprendimos
 * de React Hooks
 */

import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState({ mylist: [], trends: [] });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
        setCategories(Object.keys(data));
      });
  }, []);

  return [videos, categories];
};

export default useInitialState;
