import React, {useContext} from 'react'
import { CountContext  } from './CountProvider'
import ChildDecrement from './ChildDecrement'

const Greeting = () => {
    let {count} = useContext(CountContext)
    return (
        <div>
            <h1>Hello everyone!</h1>
            <p>There are {count} people present in the room</p>
            <ChildDecrement />
        </div>
    )
}

export default Greeting
