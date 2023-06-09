import { ChangeEvent, FormEvent, useState } from 'react'
import projectModel from '../models/projectModel'
import { useAppDispatch } from '../hooks/redux'
import { addNewProjectThunk } from '../actions/projectsActions'
import overlayModel from '../models/overlayModel'

function AddProjectForm({ onClose }: overlayModel) {
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

  const handleAdd = (e: FormEvent) => {
    e.preventDefault()
    dispatch(addNewProjectThunk(newProject))
    onClose()
  }

  return (
    <>
      <form onSubmit={handleAdd} className="addProjectform">
        Add your project
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
            image URL - separate multiple URLs by commas
          </label>
          <br />
          <textarea
            onChange={changeHandler}
            id="image"
            value={newProject.image || ''}
          />
          <br />
        </div>
        <br />
        <button type="submit" className="addProjButton">
          Add project
        </button>
      </form>
    </>
  )
}

export default AddProjectForm
