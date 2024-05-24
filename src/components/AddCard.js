import React, { useState } from 'react'
import { Plus, X } from 'react-feather'

export default function AddCard(props) {

    const [card, setCard] = useState('');
    const [show, setShow] = useState(false);

    const saveCard = () => {
      if (!card) {
        return;
      }
      props.getCard(card);
      setCard('');
      setShow(!show)
    }

    const closeButton = () => {
      setCard('');
      setShow(!show); 
    }

  return (
    <div>
      <div className='flex flex-col'>
       {show && <div>
       <textarea value={card} onChange={(e)=> setCard(e.target.value)} className='p-1 w-full rounded-md bordder-2 bg-zinc-700 border-zinc-900' placeholder='Enter Card title...' name='' id='' cols={30} rows={2}></textarea>
        <div className='flex p-1'>
            <button onClick={()=> saveCard()} className='p-1 rounded bg-sky-600 text-white mr-2'>Add Card</button>
            <button onClick={() => closeButton()} className='p-1 rounded hover:bg-gray-600'><X size={16}></X></button>
        </div>
       </div>}
      {!show && <button onClick={() => setShow(!show)} className='flex p-1 justify-start rounded items-center mt-1 hover:bg-gray-500 h-8'>
        <Plus size={16}></Plus> Add a card</button>}
      </div>
    </div>
  )
}
