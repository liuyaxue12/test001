import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
//import reportWebVitals from './reportWebVitals';

/*ReactDOM.render(
  <App/>,
  document.getElementById('root')
)




/*function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props){
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img 
        className="Avatar"
        src={props.author.avatarUrl}
        alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
      </div>
  );
}

const comment={
  date:new Date(),
  text:`i hope you enjoy learning React!`,
  author:{
    name:`Hello Kitty`,
    avatarUrl:`https://placeKitten.com/g/64/64`
  },
};

ReactDOM.render(
  <Comment
  date={comment.date}
  text={comment.text}
  author={comment.author}
  />,
  document.getElementById('root')
);*/




export default App;
//If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
