import React from 'react'

// function Greet()
// {
//     return <h1>Hello vijay</h1>
// }

const Greet = (props) => {
    return (
        <div>
            <h1>Hello {props.name} !</h1>
            <button>Hello</button>
        </div>
    )
}

export default Greet