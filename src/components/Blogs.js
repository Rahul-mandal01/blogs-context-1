import React, { useContext } from 'react'
import Spinner from './Spinner';
import {AppContext} from '../context/AppContext';

const Blogs = () => {

    // consume
    const {loading, posts} = useContext(AppContext);

  return (
    <div className='flex flex-col gap-y-10 my-[88px] '>
      {
        loading ? 

        (<Spinner/>) : 

        (
          posts.length ===0 ? 

          (<div>
            <p>No Post Found</p>
          </div>) :

          (posts.map( (post) => (

            <div key={post.id} className='w-11/12 max-w-2xl mx-auto' >
                <p className='font-bold text-lg' >{post.title}</p>
                <p className='text-sm my-1'>
                  By <span className='italic' >{post.author}</span> on <span className='underline font-semibold cursor-pointer' > {post.category} </span>
                </p>
                <p className='text-sm'>
                  Posted On <span> {post.date} </span>
                </p>
                <p className='mt-4 mb-2 '> {post.content} </p>
                <div className='flex flex-wrap gap-x-2 items-center' >
                  {post.tags.map( (tag, index) => {
                    return <span  key={index} className='text-blue-700 underline cursor-pointer font-semibold text-xs' >{ `#${tag}` } </span>
                  } )}
                </div>
            </div>

          ) ))
        )
      }
    </div>
  )
}


export default Blogs;