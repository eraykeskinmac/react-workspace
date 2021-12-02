import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 20,
    message: 'random message',
  })
  const changeMessage = () => {
    setPerson({
      ...person,
      message: 'new message',
    })
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  )
}

export default UseStateObject
