import Modal from 'react-responsive-modal'
import overlayModel from '../models/overlayModel'
import AddProjectForm from './AddProjectForm'

export function AddProjectOverlay({ isOpen, onClose }: overlayModel) {
  return (
    <>
      {isOpen && (
        <div>
          <Modal
            open={isOpen}
            onClose={onClose}
            center
            classNames={{
              overlay: 'customOverlay',
              modal: 'customModal',
            }}
          >
            <AddProjectForm onClose={onClose} />
          </Modal>
        </div>
      )}
    </>
  )
}

export default AddProjectOverlay
