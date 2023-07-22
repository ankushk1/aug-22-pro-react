import React from 'react'
import { useFetch } from '../Utils/CustomHooks'

const ApiComp3 = () => {

  const {apiData} = useFetch("https://jsonplaceholder.typicode.com","users", true)
  console.log(apiData);

  // Try to implemet filters i.e todos, posts, users and render the data 

  return (
    <div className='mt-5 fs-2'>ApiComp3</div>
  )
}

export default ApiComp3