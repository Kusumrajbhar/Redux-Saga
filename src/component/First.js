import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {ageUp, ageDown} from '../action/Action'

const First = () => {
    const ageState = useSelector((state)=> state.ageReducer)
    console.log('state', ageState)
    const dispatch = useDispatch()
    return (
        <div>
            {ageState}<br/>
            <button onClick= {()=>dispatch(ageUp())}>AGE UP</button>
            <br/>
            <button onClick={()=>dispatch(ageDown())}>AGE DOWN</button>
        </div>
    )
}

export default First
