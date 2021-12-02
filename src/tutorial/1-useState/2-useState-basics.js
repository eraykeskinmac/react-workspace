import React, { useState } from 'react';
// useState function

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // conts value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState('TAYLAN AHMET');

  const handleClick = () => {
    if (text === 'TAYLAN AHMET') {
      setText('eray keskin');
    } else {
      setText('TAYLAN AHMET');
    }
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
