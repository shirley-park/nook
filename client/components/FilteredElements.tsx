// Imports

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

// import fetchAllThunk from elements.actions
import {
  addNewElementThunk,
  fetchAllElementsThunk,
} from '../actions/elementsActions'

// element model
import elementModel from '../models/elementModel'

import { useParams } from 'react-router-dom'

import ElementCard from './ElementCard'
import { addNewElementApi } from '../apis/elementsApi'

// --------------------

function FilteredElements() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllElementsThunk())
  }, [dispatch])

  const params = useParams()
  const projectId = Number(params.id)
  console.log(projectId)

  const allElements = useAppSelector(
    (state) => state.elementsState as elementModel[]
  )

  const filteredList = allElements.filter((el) => el.project_id === projectId)

  //  Add element form ----

  const [formVisible, toggleVisibility] = useState(false)

  const toggleVisible = () => {
    toggleVisibility(!formVisible)
    console.log(formVisible)
  }

  const [newElement, setNewElement] = useState({} as elementModel)

  useEffect(() => {}, [newElement])

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.value)
    setNewElement({
      ...newElement,
      [e.target.id]: e.target.value,
    })
  }

  const handleAddElement = (e: FormEvent) => {
    e.preventDefault()
    console.log(newElement)
    dispatch(addNewElementThunk(newElement, projectId))
  }

  //  Add element form ----

  return (
    <>
      <h3>Elements</h3>

      <button className="invisibleButton" onClick={toggleVisible}>
        <span className="material-symbols-outlined">add_circle</span>
      </button>

      {/* toggle add Element form */}
      {formVisible && (
        <form onSubmit={handleAddElement} className="addElementform">
          <div className="addFormField">
            <label htmlFor="item_name">Element item</label>
            <br />
            <input
              onChange={changeHandler}
              id="item_name"
              value={newElement.item_name || ''}
              type="text"
              required
            />
          </div>
          <div className="addFormField">
            <label htmlFor="make">Brand/manufacturer:</label>
            <br />
            <input
              onChange={changeHandler}
              id="make"
              value={newElement.make || ''}
              type="text"
              required
            />
          </div>
          <div className="addFormField">
            <label htmlFor="description">Description, colour, etc.</label>
            <br />
            <textarea
              onChange={changeHandler}
              id="description"
              value={newElement.description || ''}
              rows={3}
              required
            />
          </div>
          <div className="addFormField">
            <label htmlFor="imageUrl">image url</label>
            <br />
            <input
              onChange={changeHandler}
              id="imageUrl"
              value={newElement.imageUrl || ''}
              type="text"
            />
            <br />
            <div className="addFormField">
              <label htmlFor="element_tag">item tag</label>
              <br />
              <input
                onChange={changeHandler}
                id="element_tag"
                value={newElement.element_tag || ''}
                type="text"
                required
              />
            </div>
          </div>
          <br />
          <button type="submit" className="addProjButton">
            Add element
          </button>
        </form>
      )}

      <section className="elementsGrid">
        {filteredList.map((element) => (
          <ElementCard key={element.id} element={element} />
        ))}
      </section>
    </>
  )
}

export default FilteredElements