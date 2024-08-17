import { createSignal } from 'solid-js'
import  Button  from './componets/Button'
import { onMount } from 'solid-js';


import Algebrite from 'algebrite'
import './App.css'

function App() {
  const [text, setText] = createSignal('')
  const [count,setCount] = createSignal(0)
  
  const addText = (value) => {
    setText(text() + value)
  }

  

  return (
    <>
      <div className='container'>
        <input type="text" value={text()} id='input' />
        <div className='grid'>
          <Button name={'1'} funtion={() => addText('1')} />
          <Button name={'2'} funtion={() => addText('2')} />
          <Button name={'3'} funtion={() => addText('3')} />
          <Button name={'+'} funtion={() => addText('+')} />
          <Button name={'4'} funtion={() => addText('4')} />
          <Button name={'5'} funtion={() => addText('5')} />
          <Button name={'6'} funtion={() => addText('6')} />
          <Button name={'-'} funtion={() => addText('-')} />
          <Button name={'7'} funtion={() => addText('7')} />
          <Button name={'8'} funtion={() => addText('8')} />
          <Button name={'9'} funtion={() => addText('9')} />
          <Button name={'*'} funtion={() => addText('*')} />
          <Button name={'0'} funtion={() => addText('0')} />
          <Button name={'^'} funtion={() => addText('^')} />
          <Button name={'/'} funtion={() => addText('/')} />
          <Button name={'<='} funtion={() => setText(text().slice(0,-1))} />
          <Button name={'x'} funtion={() => addText('x')} />
          <Button name={'C'} funtion={() => setText('')} />
        </div>
      </div>
      <div className='result'>
        {
          Algebrite.run(`d(${text()},x)`)
        }
      </div>
      
      
    </>
  )
}

export default App
