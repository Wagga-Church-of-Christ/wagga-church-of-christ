import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Template.scss';

const Template = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Template;
