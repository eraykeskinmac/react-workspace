import React, { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      {people.map((people) => {
        const { id, name } = people
        return (
          <div className='item' key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove item</button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>
        delete items
      </button>
    </>
  )
}

export default UseStateArray
