import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import elementModel from '../models/elementModel'
import { addNewElementThunk } from '../actions/elementsActions'

function AddElementForm({ projectId }: { projectId: number }) {
  const dispatch = useAppDispatch()
  const [newElement, setNewElement] = useState({} as elementModel)

  useEffect(() => {}, [newElement])

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewElement({
      ...newElement,
      [e.target.id]: e.target.value,
    })
  }

  const handleAddElement = (e: FormEvent) => {
    e.preventDefault()
    dispatch(addNewElementThunk(newElement, projectId)).then(() => {
      setNewElement({} as elementModel)
    })
  }
  return (
    <>
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
          <label htmlFor="make">Brand/manufacturer</label>
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
    </>
  )
}

export default AddElementForm
