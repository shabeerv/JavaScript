import React, {useState} from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = () => {
    const [value, setValue] = useState(1)
    const numOfIcecreams = useAppSelector((state) => state.icecream.numOfIcecreams)
    const dispatch = useAppDispatch()
    return (
        <div>
            <h2>Number of Icecream - {numOfIcecreams}</h2>

            <button onClick={() => dispatch(ordered())}>
                Order Icecream
            </button>
            
            <input 
                type='number' 
                value={value} 
                onChange={(e) => setValue(parseInt(e.target.value))} 
            />
            <button onClick={() => dispatch(restocked(value))}>
                Restock icecream
            </button>
        </div>
    )
}
