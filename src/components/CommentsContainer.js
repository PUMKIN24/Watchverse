import React from 'react'

const commentsData = [
    {
        name: "jerry",
        text: "lorem ipsum dollar s",
        replies: [
            {
                name: "jerry",
                text: "lorem ipsum dollar s",
                replies: [
                    {
                        name: "jerry",
                        text: "lorem ipsum dollar s",
                        replies: [
                            {
                                name: "jerry",
                                text: "lorem ipsum dollar s",
                                replies: [
                                    {
                                        name: "jerry",
                                        text: "lorem ipsum dollar s",
                                        replies: [
                                            
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }, {
        name: "jerry",
        text: "lorem ipsum dollar s",
        replies: [
            {
                name: "jerry",
                text: "lorem ipsum dollar s",
                replies: [
                    
                ]
            }
        ]
    }, {
        name: "jerry",
        text: "lorem ipsum dollar s",
        replies: [
            
        ]
    }, {
        name: "jerry",
        text: "lorem ipsum dollar s",
        replies: [
            {
                name: "jerry",
                text: "lorem ipsum dollar s",
                replies: [
                    {
                        name: "jerry",
                        text: "lorem ipsum dollar s",
                        replies: [
                            {
                                name: "jerry",
                                text: "lorem ipsum dollar s",
                                replies: [
                                    
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }, {
        name: "jerry",
        text: "lorem ipsum dollar s",
        replies: [
            
        ]
    }
]

const Comment = ({data}) => {
    const {name,text,replies} = data
    return(
        <>
        <div className="flex p-2 bg-gray-200 rounded-lg shadow-lg my-3 ">
        <div className='flex'>
        <img className='w-12 h-12' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
        </div>
        <div className="px-3">
        <p className='font font-bold'>{name}</p>
        <p>{text}</p>
        </div>
        </div>
        </>
    )
}

const CommentsList = ({comments})=>{
    return comments.map((comment, index) => 
    <div  key={index}>
        <Comment data={comment}/>
        <div className="mx-3 pl-5 border border-white border-l-black">
            <CommentsList comments={comment.replies} />

        </div>
    </div> 
    )
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='font-bold text-2xl'>Comments:</h1>
        <CommentsList comments={commentsData} /> 
    </div>
  )
}

export default CommentsContainer