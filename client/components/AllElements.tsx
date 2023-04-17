// Imports

import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { useEffect } from 'react'

// import fetchAllThunk from elements.actions
import { fetchAllElementsThunk } from '../actions/elementsActions'

// element model
import elementModel from '../models/elementModel'

import ElementCard from './ElementCard'
// --------------------

function AllElements() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllElementsThunk())
  }, [dispatch])

  const allElements = useAppSelector(
    (state) => state.elementsState as elementModel[]
  )
  console.log(allElements)

  return (
    <>
      <h3>All Elements</h3>
      <section className="elementsGrid">
        {allElements.map((element) => (
          <ElementCard key={element.id} element={element} />
        ))}
      </section>
    </>
  )
}

export default AllElements
