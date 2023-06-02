import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useEffect, useState } from 'react'
import { fetchAllElementsThunk } from '../actions/elementsActions'
import elementModel from '../models/elementModel'
import { useParams } from 'react-router-dom'
import ElementCard from './ElementCard'
import AddElementForm from './AddElementForm'
// import { IfAuthenticated } from './Authenticated'

function FilteredElements() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllElementsThunk())
  }, [dispatch])

  const params = useParams()
  const projectId = Number(params.id)

  const allElements = useAppSelector(
    (state) => state.elementsState as elementModel[]
  )

  const filteredList = allElements.filter((el) => el.project_id === projectId)

  //  Add element form ----
  const [formVisible, toggleVisibility] = useState(false)

  const toggleVisible = () => {
    toggleVisibility(!formVisible)
  }

  return (
    <div>
      {' '}
      <h3>Elements</h3>
      {/* <IfAuthenticated> */}
      <button className="addProjButton" onClick={toggleVisible}>
        {formVisible ? 'collapse' : '+ click to add'}
      </button>
      {/* </IfAuthenticated> */}
      {/* toggle add Element form */}
      {formVisible && <AddElementForm projectId={projectId} />}
      <section className="elementsGrid">
        {filteredList.map((element: elementModel) => (
          <ElementCard key={element.id} element={element} />
        ))}
      </section>
    </div>
  )
}

export default FilteredElements
