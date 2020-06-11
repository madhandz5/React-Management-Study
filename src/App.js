import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [

  {
    "id": 1,
    "image": "https://placeimg.com/64/64/1",
    "name": "홍길동",
    "birthday": "961222",
    "gender": "남자",
    "job": "대학생"
  },
  {
    "id": 2,
    "image": "https://placeimg.com/64/64/2",
    "name": "오창영",
    "birthday": "860522",
    "gender": "남자",
    "job": "개발자"
  },
  {
    "id": 3,
    "image": "https://placeimg.com/64/64/3",
    "name": "오주혁",
    "birthday": "191014",
    "gender": "남자",
    "job": "아기"
  }

]


class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {return (<Customer key={c.id}id={c.id}image={c.image}name={c.name}birthday={c.birthday}gender={c.gender}job={c.job}/>)})
        }
      </div>
    );
  }
}

export default App;
