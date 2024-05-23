import { useState } from 'react';
import React from 'react';
import './App.css';
import NavBar from '../src/assets/components/common/navigationBar';
import '../src/assets/css/navbar.css'
import HeadingSection from '../src/assets/components/specific/caseStudy';


function App(){
  return(
    <>
      <NavBar/>
      <div><HeadingSection /></div>
    </>
  );
}

export default App;

//