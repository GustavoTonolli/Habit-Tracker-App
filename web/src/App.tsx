import './styles/global.css'
import { Plus } from 'phosphor-react'

// import { Habit } from './components/Habit'

import logoImage from './assets/logo.svg'
import { Header } from './components/Header'

export function App() {

  return (
   <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full max-w-5xl px-6 flex-col gap-16'>
        <Header />


      </div>
   </div>
  )
}