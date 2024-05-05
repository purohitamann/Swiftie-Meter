import React from 'react'
import response from  '../../gai-api/response.json';

interface TriviaItem {
    question: string;
    options: {
      a: string;
      b: string;
      c: string;
    };
    answer: string;
    evidence: string;
  }
const Trivia = () => {

    
    // {data.map((item: TriviaItem, key:number)=>(
    //   <div key={key}>
    //      <p>{ item.question}</p>
    //   </div>
    // ))}
    const fetchQuestions = () =>{
}
    
  return (
    <div>
     <button type="submit" >Start</button>
     {response.map((subArray: TriviaItem[], index: number) => (
      subArray.map((item: TriviaItem, key: number) => (
      <div className="trivia">
       <div key={key}>
          <h2>Question: {item.question.toUpperCase()}</h2>
      <h3>Options</h3>
        <button>{item.options.a}</button>
        <button>{item.options.b}</button>
        <button>{item.options.c}</button>
      <button type="submit" >Submit Answer</button>
      <p>{item.answer} {item.evidence}</p>
      
        </div> </div>
   
      ))
    ))}
    </div>
  )
}

export default Trivia
