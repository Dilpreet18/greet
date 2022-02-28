import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// let curDate = new Date(2022,1,11,5); this is static date we can insert
//fetching current data & time
const cur = new Date();
const curDate = `${cur.getDate()}/${cur.getMonth()+1}/${cur.getFullYear()}`;
// curDate = curDate.getDate();
const hours = `${cur.getHours()}`
const min = `${cur.getMinutes()}`
const sec = `${cur.getSeconds()}`
console.log(curDate);
console.log(hours)
console.log(min)
console.log(sec)
let greeting ='';
const cssStyle = {};
if(hours>=1 && hours<12){
  greeting = 'Good Morning';
  cssStyle.color ='green';
}else if(hours>=12 && hours<19){
  greeting = "Good Afternoon";
  cssStyle.color ='Orange';

} else{
  greeting = "Good Night";
  cssStyle.color ='black';

}

ReactDOM.render(
  <>
  <div>
  <h1> Hello Dilpreet Sir, <span style= {cssStyle}>{greeting}</span></h1> <br/> <br/>
  
  </div>
  <h1>present time is {hours}:{min}</h1>
  ,
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
