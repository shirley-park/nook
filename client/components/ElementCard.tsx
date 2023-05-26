import { useAppDispatch } from '../hooks/redux'
import { FormEvent, useState, ChangeEvent, useEffect, useRef } from 'react'
import elementModel from '../models/elementModel'
import {
  deleteElementThunk,
  updateElementThunk,
} from '../actions/elementsActions'
import { IfAuthenticated } from './Authenticated'
import { MdOutlineModeEdit, MdOutlineDelete } from 'react-icons/md'

function ElementCard({ element }: { element: elementModel }) {
  const dispatch = useAppDispatch()

  const [editMode, setEditMode] = useState(false)

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  const [formDeets, setFormDeets] = useState({} as elementModel)

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

  const handleDelete = (id: number) => {
    dispatch(deleteElementThunk(id))
  }

  return (
    <div key={element.id} className="elementCard">
      <div className="elementFlexContainer">
        <h3>{element.item_name}</h3>
        <p className="elementTag">{element.element_tag}</p>
      </div>

      <div className="h4AndSymbolsDiv">
        <h4>{element.make}</h4>
        <IfAuthenticated>
          <div className="editDeleteIcons">
            {editMode ? (
              <button onClick={toggleEditMode} className="cancelEdit">
                cancel
              </button>
            ) : (
              <MdOutlineModeEdit
                className="iconButton"
                onClick={toggleEditMode}
              />
            )}

            <MdOutlineDelete
              className="iconButton"
              onClick={() => {
                handleDelete(element.id)
              }}
            />
          </div>
        </IfAuthenticated>
      </div>

      {/* edit form */}

      {editMode && (
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
              value={formDeets.item_name || element.item_name}
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
              value={formDeets.make || element.make}
              type="text"
              className="editInput"
              placeholder={element.make}
              onChange={changeHandler}
            />
            <br />
            <label htmlFor="description" className="editLabel">
              Description, colour, etc.
            </label>
            <br />
            <textarea
              id="description"
              value={formDeets.description || element.description}
              className="editInput"
              placeholder={element.description}
              onChange={changeHandler}
            />
            <br />
            <label htmlFor="imageUrls" className="editLabel">
              Image Url
            </label>
            <br />
            <input
              id="imageUrl"
              value={formDeets.imageUrl || ''}
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
              value={formDeets.element_tag || element.element_tag}
              type="text"
              className="editInput"
              placeholder={element.element_tag}
              onChange={changeHandler}
            />
            <br />
            <button className="addProjButton" type="submit">
              Update
            </button>
          </form>
        </div>
      )}
      <hr />
      <img src={element.imageUrl} alt={element.item_name} />
      <p>{element.description}</p>
    </div>
  )
}

export default ElementCard
