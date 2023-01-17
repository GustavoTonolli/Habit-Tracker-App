import { useState } from 'react'
import { Habit } from './components/Habit'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Habit completed = {3} />
    <Habit completed = {15} />
    <Habit completed = {30} />
    <Habit completed = {20} />
    <Habit completed = {10} />
    </>
  )
}
// Componente : Reaproveitar / Isolar
// Propriedade : Uma informacao enviada pra modificar um componente visual ou comportamentalmente

export default App
