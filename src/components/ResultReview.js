import React,{useEffect} from "react";

export default function ResultReview({questions,answers,score}){

// auto close after 60 sec
useEffect(()=>{
 setTimeout(()=>{
   window.close();
 },60000);
},[]);


return(
<div style={{padding:30}}>

<h2>
Score : {score} / 50
</h2>

<hr/>

{questions.map((q,i)=>{

 const correct = q.answer;
 const chosen = answers[i];

 return(
 <div key={i} style={{marginBottom:20}}>

 <b>Q{i+1}. {q.question}</b>

 <div>
 Your Answer:
 {q.options[chosen-1] || "Not Answered"}
 </div>

 <div>
 Correct Answer:
 {q.options[correct-1]}
 </div>

 <div style={{color:"green"}}>
 Explanation:
 {q.explanation}
 </div>

 <hr/>

 </div>
 );

})}

</div>
);
}