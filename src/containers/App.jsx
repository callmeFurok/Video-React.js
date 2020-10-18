import React from 'react';
import Header from '../components/HeaderVideo';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

//Aqui referenciamos los estilos para que funcione
import '../assets/styles/App.scss';

const App = () => (
  <div className="App">
    <Header />
    <Search />
    <Categories>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>
    <Footer />
  </div>
);

export default App;
