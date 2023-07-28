import React from 'react'
import { useFetch } from '../Utils/CustomHooks'
import {useSelector} from 'react-redux';

const ApiComp3 = () => {

  // const {apiData} = useFetch("https://jsonplaceholder.typicode.com","users", true)
  // console.log(apiData);

  // Try to implemet filters i.e todos, posts, users and render the data 

  const count = useSelector((state) => state.counter.count);
  console.log('ApiComp3', count)
  return (
    <div className='mt-5 fs-2'>ApiComp3
    <h2>{count}</h2>
    </div>
  )
}

export default ApiComp3