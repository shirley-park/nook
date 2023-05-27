import overlayModel from '../models/overlayModel'
import AddProjectForm from './AddProjectForm'

export function AddProjectOverlay({ isOpen, onClose }: overlayModel) {
  return (
    <>
      {isOpen && (
        <div className="overlay">
          <div
            className="overlay__background"
            role="presentation"
            onClick={onClose}
          />
          <div className="overlay__container">
            <div className="overlay__controls">
              <button
                className="overlay__close"
                type="button"
                onClick={onClose}
              />
            </div>
            <AddProjectForm onClose={onClose} />
          </div>
        </div>
      )}
    </>
  )
}

export default AddProjectOverlay
