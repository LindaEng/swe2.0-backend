import React, {useContext} from 'react'
import { CountContext } from './CountProvider'

const ChildDecrement = () => {
    let {decrement} = useContext(CountContext)
    return (
        <div>
            <h2>Decrement button Child component</h2>
            <button onClick={decrement}>decrease</button>
        </div>
    )
}

export default ChildDecrement
