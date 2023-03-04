import { useState } from 'react'
import reactLogo from './assets/react.svg'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home';

function App() {
  return (
      <MainLayout>
        <Home />
      </MainLayout>
  )
}

export default App
