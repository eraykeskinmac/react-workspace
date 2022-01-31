import React from 'react';
// react router
import { Route, Routes } from 'react-router-dom';
// pages
import About from './About';
import Error from './Error';
import Home from './Home';
import Navbar from './Navbar';
import People from './People';
import Person from './Person';

const ReactRouterSetup = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='people' element={<People />}>
          <Route path=':id' element={<Person />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default ReactRouterSetup;
