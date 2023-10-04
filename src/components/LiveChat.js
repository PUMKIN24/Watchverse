import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'

const LiveChat = () => {

    const dispatch = useDispatch()

    const chatMessages = useSelector((store) => store.chat.messages)

    useEffect(()=>{
        const timer = setInterval(()=>{
            //API Polling
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: makeRandomMessage(20)
                })
            ) 
        },500)

        return ()=> clearInterval(timer)
    }, [])
  return (
    <div className='w-full h-[300px] overflow-y-scroll flex flex-col-reverse  '>
        {chatMessages.map((c, index)=> (
            
        <ChatMessage key={index} name={c.name} message={c.message} />
        ))}

    </div>
  )
}

export default LiveChat