import { useAppDispatch } from '../hooks/redux'

import elementModel from '../models/elementModel'

import { deleteElementThunk } from '../actions/elementsActions'

// --------------------

function ElementCard({ element }: { element: elementModel }) {
  // const handleSubmitEdit = (e: FormEvent) => {
  //   e.preventDefault()
  //   console.log('1.' + formDeets)
  //   dispatch(updateItemThunk(furnObj.id, formDeets))
  //     .then(() => {
  //       toggleVisibility(!formVisible)
  //     })
  //     .catch((err) => {
  //       console.log(err.message)
  //     })
  // }

  const dispatch = useAppDispatch()

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
        <div className="editDeleteIcons">
          <button className="invisibleButton">
            <span className="material-symbols-outlined">edit</span>
          </button>
          <button
            className="invisibleButton"
            onClick={() => {
              handleDelete(element.id)
            }}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
      <hr />
      <img src={element.imageUrl} alt={element.item_name} />
      <p>{element.description}</p>
    </div>
  )
}

export default ElementCard
