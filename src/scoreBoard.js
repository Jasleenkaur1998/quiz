import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './score.css';

export default function ScoreBoard() {

  let [scoreBoard, setScoreBoard] = useState([]);

  React.useEffect(function() {
    axios.get(`/api/1.0/score`).then((response) => {
      console.log(response.data.output, "output");
      const sortedData = response.data.output.sort(compare);
      setScoreBoard(sortedData);
  }).catch(error => {
      alert(error.message)
  })
  }, [])

  function compare( a, b ) {
    if ( +a.score < +b.score ){
      return 1;
    }
    if ( +a.score > +b.score ){
      return -1;
    }
    return 0;
  }
  
  return (
    <div className='score-list'>
      <div className='score-list-container'>
      <h1 style={{ textAlign: "center"}}>SCORE BOARD</h1>
      {
        scoreBoard.slice(0, 6).map((data, index) => {
          return <div className='score-name'> 
          {index} -  {data.user.name} -  { data.score}
          </div>
        })
      }
      </div>
      <Link style={{ marginTop: "40px"}} to="../dashboard">Give Quiz again!</Link>
    </div>
  )
}
