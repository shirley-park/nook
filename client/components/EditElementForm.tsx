import { useAppDispatch } from '../hooks/redux'
import { FormEvent, useState, ChangeEvent, useEffect, useRef } from 'react'
import { updateElementThunk } from '../actions/elementsActions'
import elementModel from '../models/elementModel'
import { editElementModal } from '../models/overlayModel'

function EditElementForm(
  { element }: { element: elementModel },
  onClose: { onClose: editElementModal }
) {
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
        toggleEditMode(!editMode)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <>
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
          required
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
          required
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
          required
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
          required
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
          required
        />
        <br />
        <button className="addProjButton" type="submit">
          Update
        </button>
      </form>
    </>
  )
}

export default EditElementForm
