import React from 'react';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const { id } = useParams();

  return (
    <>
      <div>
        <h1>Person: {id}</h1>
        <Link to='/people' className='btn'>
          Back To People
        </Link>
      </div>
    </>
  );
};

export default Person;
