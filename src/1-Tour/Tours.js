import React from 'react';
import Tour from './1-Tour/Tour';

const Tours = ({tours,RemoveTour}) => {
  return <section>
      <div className="title">
         <h2>our tours</h2>
         <div className="underline"></div>
       </div>
       <div>
         {tours.map( (tour) =>{
             
            return <Tour key={tour.id} {...tour} RemoveTour={RemoveTour}/>
        
         })}
       </div>

  </section>
};

export default Tours;