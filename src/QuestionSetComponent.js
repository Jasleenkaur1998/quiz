import React from 'react';
import './questionset.css';

export default function QuestionSetComponent(props) {


   function updateScore(event) {
    let eventVal = event.target.value === 'true';
    if (eventVal == props.data.answer) {
       props.getScore(1);
    } else {
      props.getScore(-1);
    }
  }

  return (
    <div className='question-set'>
      <form>
        <h3>{props.data.question}</h3>

        <div className='option-set'>
          {
            props.data.options.map((val, index) => {
              return (
                <div className='input-box'>
                  <input required value={val} onChange={updateScore} type="radio" name={props.data.question} id={props.data.question} />
                  <label for={props.data.question}>{JSON.stringify(val)}</label>
                </div>
              )
            })
          }

        </div>
      </form>
    </div>
  )
}
