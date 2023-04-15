// Imports

import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { useEffect } from 'react'

// import fetchAllThunk from elements.actions
import { fetchAllElementsThunk } from '../actions/elementsActions'

// element model
import elementModel from '../models/elementModel'

// --------------------

function Elements() {
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
      <h3>Watch this space</h3>
      <p>This is where the Elements will be!</p>
      {allElements.map((element) => (
        <div key={element.id}>
          <img src={element.imageUrl} alt={element.item_name} />
        </div>
      ))}
    </>
  )
}

export default Elements
