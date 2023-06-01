import { useAppDispatch } from '../hooks/redux'
import { FormEvent, useState, ChangeEvent, useEffect } from 'react'
import elementModel from '../models/elementModel'
import {
  deleteElementAction,
  updateElementAction,
  // deleteElementThunk,
  // updateElementThunk,
} from '../actions/elementsActions'
// import { IfAuthenticated } from './Authenticated'
import { MdOutlineModeEdit, MdOutlineDelete } from 'react-icons/md'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

function ElementCard({ element }: { element: elementModel }) {
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
      id: element.id,
    })
  }

  const handleSubmitEdit = async (e: FormEvent) => {
    try {
      e.preventDefault()
      dispatch(updateElementAction(formDeets))
      setEditMode(!editMode)
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message)
      }
    }
  }

  const handleDelete = (id: number) => {
    dispatch(deleteElementAction(id))
  }

  return (
    <>
      {/* edit form */}
      {editMode && (
        <Modal
          open={editMode}
          onClose={toggleEditMode}
          center
          classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
          }}
        >
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
        </Modal>
      )}
      <div key={element.id} className="elementCard">
        <div className="elementFlexContainer">
          <h3>{element.item_name}</h3>
          <p className="elementTag">{element.element_tag}</p>
        </div>

        <div className="h4AndSymbolsDiv">
          <h4>{element.make}</h4>
          {/* <IfAuthenticated> */}
          <div className="editDeleteIcons">
            <button className="iconButton">
              <MdOutlineModeEdit onClick={toggleEditMode} />
            </button>

            <button className="iconButton">
              <MdOutlineDelete
                onClick={() => {
                  handleDelete(element.id)
                }}
              />
            </button>
          </div>
          {/* </IfAuthenticated> */}
        </div>

        <hr />
        <img src={element.imageUrl} alt={element.item_name} />
        <p>{element.description}</p>
      </div>
    </>
  )
}

export default ElementCard
