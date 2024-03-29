import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCoffee } from './store/reducers/asyncActions/asyncActions'

const Coffee = () => {

    const dispatch=useDispatch('')
    useEffect(()=>{
        dispatch(getCoffee)
    }, [])
  return (
    <div>

    </div>
  )
}

export default Coffee