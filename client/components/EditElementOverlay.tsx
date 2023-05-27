import editOverlayModel from '../models/overlayModel'
import EditElementForm from './EditElementForm'
import FadeInAnimation from './FadeInAnimation'
import elementModel from '../models/elementModel'

export function EditElementOverlay(
  { onClose }: editOverlayModel,
  element: elementModel
) {
  return (
    <>
      {/* {editMode && ( */}
      <div className="overlay">
        <div
          className="overlay__background"
          role="presentation"
          onClick={onClose}
        />
        <div className="overlay__container">
          {/* <FadeInAnimation wrapperElement="div"> */}
          <div className="overlay__controls">
            <button
              className="overlay__close"
              type="button"
              onClick={onClose}
            />
          </div>
          <EditElementForm element={element} />
          {/* </FadeInAnimation> */}
        </div>
      </div>
      {/* )} */}
    </>
  )
}

export default EditElementOverlay
