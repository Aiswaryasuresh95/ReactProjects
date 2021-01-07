import React,{useState} from 'react';
import Review from '../Review/Review';
import SingleQuestion from './Questions';
import data from './data'


function App() {


  return <main>
    <section className="container">
      <div className="title">
         <h2>Our Reviews</h2>
         <div className="underline"></div>
      </div>
      <Review />
    </section>
  </main>
  
 

}

export default App;
