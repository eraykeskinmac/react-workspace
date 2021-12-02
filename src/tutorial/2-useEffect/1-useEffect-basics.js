import React, { useEffect, useState } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setvalue] = useState(0);

  useEffect(() => {
    console.log('call useEffect');

    if (value >= 1) {
      document.title = `You clicked ${value} times`;
    }
  }, [value]);

  useEffect(() => {
    console.log('hello world');
  }, []);

  console.log('render component');

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setvalue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
