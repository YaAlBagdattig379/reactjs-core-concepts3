import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

{/*************for data loading from API****************)/*/}
function App() {
  return (
    <div className="App">
      <LoadComments></LoadComments>
    </div>
  );
}
function LoadComments(){
  const [comments,setComments] = useState([]);
  useEffect( () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data => setComments(data))
  },[])
  return (
    <div>
      <h3>commments : {comments.length}</h3>
      {
        comments.map(comment => <Comment name={comment.name} email={comment.email}></Comment>)// console.log(comment.name))
      }
    </div>

  )
  function Comment (props){
    return (
      <div style={{border:"5px solid green", color:'orange',margin:'6px',borderRadius:'10px'}}>
        <h3>tiny name : {props.name}</h3>
        <p style={{color:'gray'}}>email id : {props.email}</p>
      </div>
    )
  }
}
{/*     (****************for increase and decrease button****************)
  function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
function Counter(){
  const [count,setCount] = useState(0);
  const counterHandle = () => setCount(count + 1);
  const counterHandle2 = () => setCount(count - 1);
  return (
    <div>
      <h1>counter : {count}</h1>
      <button onClick={counterHandle}>Increase</button>
      <button onClick={counterHandle2}>Decrease</button>
    </div>

  )
}
*/}

export default App;
