import { useAppDispatch } from '../hooks/redux'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import elementModel from '../models/elementModel'
import { updateElementThunk } from '../actions/elementsActions'
import { getAllElements } from '../../server/db/db'

function EditElementForm({ element }: { element: elementModel }, id: number) {
  const dispatch = useAppDispatch()

  const [editMode, setEditMode] = useState(false)

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  const [formDeets, setFormDeets] = useState<elementModel>(element)

  useEffect(() => {}, [formDeets])

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormDeets({
      ...formDeets,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmitEdit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(updateElementThunk(element.id, formDeets))
      .then(() => {
        setEditMode(!editMode)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmitEdit} className="editForm">
        Edit your element
        <br />
        <br />
        <label htmlFor="item_name" className="editLabel">
          Name
        </label>
        <br />
        <input
          id="item_name"
          value={formDeets.item_name}
          type="text"
          className="editInput"
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="make" className="editLabel">
          Brand/manufacturer
        </label>
        <br />
        <input
          id="make"
          value={formDeets.make}
          type="text"
          className="editInput"
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="description" className="editLabel">
          Description, colour, etc.
        </label>
        <br />
        <textarea
          id="description"
          value={formDeets.description}
          className="editInput"
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="imageUrls" className="editLabel">
          Image Url
        </label>
        <br />
        <input
          id="imageUrl"
          value={formDeets.imageUrl}
          type="text"
          className="editInput"
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="element_tag" className="editLabel">
          Tag
        </label>
        <br />
        <input
          id="element_tag"
          value={formDeets.element_tag}
          type="text"
          className="editInput"
          onChange={changeHandler}
        />
        <br />
        <button className="addProjButton" type="submit">
          Update
        </button>
      </form>
    </div>
  )
}

export default EditElementForm
