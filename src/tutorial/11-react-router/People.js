import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { data } from '../../data';
const People = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <div>
        <h1>People Page</h1>
        {people.map(({ name, id }) => {
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <Link to={`/person/${id}`}>Learn More</Link>
            </div>
          );
        })}
      </div>
      <Outlet />
    </>
  );
};

export default People;
