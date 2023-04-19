import { ChangeEvent, FormEvent, useState } from 'react'

import projectModel from '../models/projectModel'
import { useAppDispatch } from '../hooks/redux'
import { addNewProjectThunk } from '../actions/projectsActions'
// import { useNavigate } from 'react-router-dom'
import overlayModel from '../models/overlayModel'

// --------------------

function AddProject({ onClose }: overlayModel) {
  const dispatch = useAppDispatch()

  const [newProject, setNewProject] = useState({} as projectModel)

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewProject({
      ...newProject,
      [e.target.id]: e.target.value,
    })
  }

  // const navigate = useNavigate()

  const handleAdd = (e: FormEvent) => {
    e.preventDefault()
    console.log(newProject)
    dispatch(addNewProjectThunk(newProject))
    onClose()
    // navigate('/')
  }

  return (
    <>
      <form onSubmit={handleAdd} className="addProjectform">
        <div className="addFormField">
          <label htmlFor="space">Which space are you working on?</label>
          <br />
          <input
            onChange={changeHandler}
            id="space"
            value={newProject.space || ''}
            type="text"
            required
          />
        </div>
        <div className="addFormField">
          <label htmlFor="description">What vibes are you going for?</label>
          <br />
          <textarea
            onChange={changeHandler}
            id="description"
            value={newProject.description || ''}
            rows={3}
            required
          />
        </div>
        <div className="addFormField">
          <label htmlFor="image">
            image URL - separate multiple URLs by vertical bars '|'
          </label>
          <br />
          <textarea
            onChange={changeHandler}
            id="image"
            value={newProject.image || ''}
          />
          <br />
          {/* or
          <br />
          <input
            onChange={changeHandler}
            id="image"
            type="file"
            className="fileUpload"
          /> */}
        </div>
        <br />
        <button type="submit" className="addProjButton">
          Add project
        </button>
      </form>
    </>
  )
}

export default AddProject
