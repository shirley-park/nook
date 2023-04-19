// import React from "react";
import FadeInAnimation from './FadeInAnimation'

export default function FadeTest() {
  return (
    <div>
      <FadeInAnimation wrapperElement="h1">Hello CodeSandbox</FadeInAnimation>
      <FadeInAnimation wrapperElement="h2">
        Start editing to see some magic happen!
      </FadeInAnimation>
      <FadeInAnimation
        style={{
          width: 200,
          color: 'white',
          height: 200,
          backgroundColor: 'purple',
        }}
      >
        <p>Hello</p>
      </FadeInAnimation>
    </div>
  )
}
