import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
const Button = React.lazy(() => import('shared/Button'));
function App() {

  
  return (
    <div>
      <Button/>
    </div>
  )
}

export default App
