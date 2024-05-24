import React, { useContext } from 'react'
import { Edit2, MoreHorizontal, UserPlus } from 'react-feather'
import AddCard from './AddCard'
import { BoardContext } from '../context/BoardContext'

export default function Main() {

  const {allBoards, setAllBoards} = useContext(BoardContext);
  const boardData = allBoards.boards[allBoards.active];

  const cardData = (e) => {
      let newList = [...boardData.list];
  }
  return (
    <div className='flex flex-col bg-slate-900 w-full'>
      <div className='p-3 bg-black flex justify-between w-full bg-opacity-50'>
        <h2 className='text-lg'>{boardData.name}</h2>
        <div className='flex items-center justify-center'>
            <button className='bg-gray-200 text-gray-500 px-2 mr-2 py-1 rounded flex justify-center items-center h-8'>
            <UserPlus size={16} className='mr-2'></UserPlus>
            Share</button>
            <button className='hover:bg-gray-500 px-2 py-1 h-8 rounded'><MoreHorizontal size={16}></MoreHorizontal></button>
        </div>
      </div>
      <div className='flex flex-col w-full flex-grow relative'>
        <div className='absolute mb-1 pb-2 left-0 right-0 top-0 bottom-0 p-3 flex overflow-x-scroll overflow-y-hidden'>
          {boardData.list && boardData.list.map((x, i)=> {
           return  <div className='mr-3 w-60 h-fit rounded-md p-2 bg-black flex-shrink-0'>
                <div className='list-body'>
                    <div className='flex justify-between p-1'>
                        <span>{x.title}</span>
                        <button className='hover:bg-gray-500 p-1 rounded-sm'><MoreHorizontal size={16}></MoreHorizontal></button>
                    </div>
                  {x.items && x.items.map ((item, index) => {

                  return <div className='item flex justify-between items-center bg-zinc-700 p-1 cursor-pointer rounded-md border-2 border-zinc-900 hover:border-gray-500'>
                    <span>{item.title}</span>
                    <span className='flex justify-start items-start'>
                      <button className='hover:bg-gray-600 p-1 rounded-sm'><Edit2 size={16}></Edit2></button>
                    </span>
                  </div>
                  })
                }
                    <AddCard getCard={(e) => cardData(e)}></AddCard>
                </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
