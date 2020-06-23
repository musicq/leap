import React from 'react'
import {Button} from '@leap/uikit'

export const App = () => {
  return (
    <div className="app">
      <Button onClick={() => console.log(1)}>Click me!</Button>
    </div>
  )
}

export default App
