import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { Children } from 'react'

const FadeInAnimation = ({
  children,
  wrapperElement = 'div',
  direction = null,
  delay = 0,
  ...props
}) => {
  const Component = wrapperElement
  let compRef = useRef(null)

  const fadeDirection = { x: 0 }

  useEffect(() => {
    gsap.from(compRef.current, 1, {
      ...fadeDirection,
      opacity: 0,
      delay,
    })
  }, [compRef, fadeDirection, delay])
  return (
    <Component ref={compRef} {...props}>
      {children}
    </Component>
  )
}

export default FadeInAnimation
