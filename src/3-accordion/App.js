import React,{useState} from 'react';
import Review from '../Review/Review';
import SingleQuestion from './Questions';
import data from './data'


function App() {

  const [questions,setQuestion]=useState(data);
  
  return <main>
     <div className="container">
       <h3>Question and answers about logic</h3>
       <section className="info">
         {questions.map((question)=>{
            return(<SingleQuestion key={question.id} {...question} />)
           
         })}

       </section>
     </div>

  </main>

}

export default App;
