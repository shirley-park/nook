// Imports

import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { useEffect } from 'react'

// import fetchAllThunk from elements.actions
import { fetchAllElementsThunk } from '../actions/elementsActions'

// element model
import elementModel from '../models/elementModel'

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
          <div key={element.id} className="elementCard">
            <div className="elementFlexContainer">
              <h3>{element.item_name}</h3>
              <p className="elementTag">{element.element_tag}</p>
            </div>
            <h4>{element.make}</h4>
            <hr />
            <img src={element.imageUrl} alt={element.item_name} />
            <p>{element.description}</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default AllElements
