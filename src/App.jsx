import { useState } from 'react';
import './App.css';

function App() {
  const DEFAULT_DISPLAY = "10 Things That Require Zero Talent";
  const STUDENT_NAME = "ALVIN JAN V. SUNGA";
  const STUDENT_SECTION = "IT3A";
  const SUBJECT_CODE = "C-PCIT9";

  const [display, setDisplay] = useState(DEFAULT_DISPLAY);

  const items = {
    '1': 'Being On Time',
    '2': 'Making An Effort',
    '3': 'Being High Energy',
    '4': 'Having A Positive Attitude',
    '5': 'Being Passionate',
    '6': 'Using Good Body Language',
    '7': 'Being Coachable',
    '8': 'Doing A Little Extra',
    '9': 'Being Prepared',
    '0': 'Having A Strong Work Ethic',
    'NAME': STUDENT_NAME,
    'SUBJ': SUBJECT_CODE,
  };

  const handleClick = (key) => {
    if (items[key]) {
      setDisplay(items[key]);
    }
  };

  return (
    <div className="container">
      {/* Header displaying student name and section */}
      <div className="header-title">
        {STUDENT_NAME} - {STUDENT_SECTION}
      </div>

      <div className="calculator-card">
        {/* Main Display Screen */}
        <div className="display-box">
          {display}
        </div>

        {/* Calculator Keypad */}
        <div className="keypad">
          <button className="btn btn-num" onClick={() => handleClick('7')}>7</button>
          <button className="btn btn-num" onClick={() => handleClick('8')}>8</button>
          <button className="btn btn-num" onClick={() => handleClick('9')}>9</button>

          <button className="btn btn-num" onClick={() => handleClick('4')}>4</button>
          <button className="btn btn-num" onClick={() => handleClick('5')}>5</button>
          <button className="btn btn-num" onClick={() => handleClick('6')}>6</button>

          <button className="btn btn-num" onClick={() => handleClick('1')}>1</button>
          <button className="btn btn-num" onClick={() => handleClick('2')}>2</button>
          <button className="btn btn-num" onClick={() => handleClick('3')}>3</button>

          <button className="btn btn-num" onClick={() => handleClick('0')}>0</button>
          <button className="btn btn-action" onClick={() => handleClick('NAME')}>NAME</button>
          <button className="btn btn-subj" onClick={() => handleClick('SUBJ')}>SUBJ</button>
        </div>
      </div>
    </div>
  );
}

export default App;