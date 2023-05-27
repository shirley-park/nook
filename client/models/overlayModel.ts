export default interface overlayModel {
  isOpen?: boolean
  onClose?: any
  children?: React.ReactNode
}

export default interface editOverlayModel {
  editMode?: boolean
  onClose?: any
  element?: object
  children?: React.ReactNode
}
