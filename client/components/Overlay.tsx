import overlayModel from '../models/overlayModel'
import AddProject from './AddProject'

export function Overlay({ isOpen, onClose }: overlayModel) {
  console.log(onClose, 'onclose')
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
            <AddProject onClose={onClose} />
          </div>
        </div>
      )}
    </>
  )
}

export default Overlay
