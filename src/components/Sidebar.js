import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const isMenuOpen = useSelector(store=> store.app.isMenuOpen)
    if(!isMenuOpen) return null;


  return (
    <div className='p-5 shadow-lg w-48  '>
        <ul className='' >
            <li className='flex'> <img className='h-5 px-2' src="https://icons.veryicon.com/png/o/commerce-shopping/poly-budget-icon-library/home-202.png" alt="home" /><Link to={"/"}>Home </Link></li>
            <li className='flex'> <img className='h-5 px-2'  src="https://image.pngaaa.com/493/5593493-middle.png" alt="shorts" /> Shorts</li>
            <li className='flex'> <img className='h-5 px-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHiqbTti9Ypeom7PmkUqe-f2SEeNQY_NZo1A&usqp=CAU" alt="videos" />Videos</li>
            <li className='flex'> <img className='h-5 px-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYmJIGWm_5zCyaMNTDVYq0QzZnoDmbeJEUeJPY1xMVMhtPYjjVdEjDBhBesnoMQ3tTgGs&usqp=CAU" alt="live" /> Live</li>
        </ul>
        <h1 className='font-bold mt-5'>Subscriptions</h1>
        <ul>
            <li className='flex'> <img className='h-5 px-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/1024px-Youtube_Music_icon.svg.png" alt="music" /> Music</li>
            <li className='flex'> <img className='h-5 px-2' src="https://cdn-icons-png.flaticon.com/128/33/33736.png" alt="sports" /> Sports</li>
            <li className='flex'> <img className='h-5 px-2' src="https://freesvg.org/img/controller-icon.png" alt="Gaming" /> Gaming</li>
            <li className='flex'> <img className='h-5 px-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYqr5XXrbd0VM-j9nhs2eyQDa_iA4chEBVw&usqp=CAU" alt="Movies" /> Movies</li>
        </ul>

        <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
        </ul>
    </div>
  )
}

export default Sidebar