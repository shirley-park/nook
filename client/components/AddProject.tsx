import { FormEvent } from 'react'

function AddProject() {
  const handleAdd = (e: FormEvent) => {
    console.log(e, 'we will sort this out')
  }

  return (
    <>
      <form onSubmit={handleAdd} className="addProjectform">
        <div className="addFormField">
          <label htmlFor="space_name">Which space are you working on?</label>
          <br />
          <input id="space_name" type="text" required />
        </div>
        <div className="addFormField">
          <label htmlFor="vibes">What vibes are you going for?</label>
          <br />
          <input id="vibes" type="text" required />
        </div>
        <div className="addFormField">
          <label htmlFor="image">image</label>
          <br />
          <input id="image" type="text" />
          <br />
          or
          <br />
          <input id="image" type="file" />
        </div>
        <br />
        <button type="submit" className="addProj">
          Add your project
        </button>
      </form>
    </>
  )
}

export default AddProject
