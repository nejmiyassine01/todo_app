import React, { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');
    const inputFields = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Success Submitted')

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });
        setInput('');
    }
    
    return (
        <form className="listcontainer_form" autoComplete="off" onSubmit={handleSubmit}>
            <input type="checkbox" defaultChecked={false} />
            <input 
                className="listcontainer_input" 
                type="text" placeholder="Enter new Item..." 
                onChange={inputFields}
                value={input}
                required
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default TodoForm
