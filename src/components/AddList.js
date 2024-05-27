import React, { useState } from 'react'
import { Plus, X } from 'react-feather'

export default function AddList(props) {

    const [list, setList] = useState('');
    const [show, setShow] = useState(false);

    const saveList = () => {
      if (!list) {
        return;
      }
      props.getlist(list);
      setList('');
      setShow(!show)
    }

    const closeButton = () => {
      setList('');
      setShow(!show);
    }

  return (
    <div>
      <div className='flex flex-col h-fit flex-shrink-0 mr-3 w-60 rounded-md p-2 bg-black'>
       {show && <div>
       <textarea value={list} onChange={(e)=> setList(e.target.value)} className='p-1 w-full rounded-md bordder-2 bg-zinc-700 border-zinc-900' placeholder='Enter list title...' name='' id='' cols={30} rows={2}></textarea>
        <div className='flex p-1'>
            <button onClick={()=> saveList()} className='p-1 rounded bg-sky-600 text-white mr-2'>Add list</button>
            <button onClick={() => closeButton()} className='p-1 rounded hover:bg-gray-600'><X size={16}></X></button>
        </div>
       </div>}
      {!show && <button onClick={() => setShow(!show)} className='flex p-1 justify-center rounded items-center mt-1 hover:bg-gray-500 h-8'>
        <Plus size={16}></Plus> Add a list</button>}
      </div>
    </div>
  )
}
