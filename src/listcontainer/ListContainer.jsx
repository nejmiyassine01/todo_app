import React, { useState } from 'react'
import * as Ai from 'react-icons/ai'
import './ListContainer.scss'

function ListContainer(props) {
    const [toggleClass, setToggleClass] = useState(false);
    const addClass = () => setToggleClass(!toggleClass);

    const [remover, setRemover] = useState(false);
    const removeItem = () => setRemover(!remover);

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        
        setTodos(newTodos);
        console.log(todo, ...todos);
    }
    
    const [input, setInput] = useState('');
    const inputFields = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Form');
        
        // onsubmit({
        //     id: Math.floor(Math.random() * 10000),
        //     text: input
        // })
    }
    
    return (
        <>
            <div className="listcontainer" onSubmit={addTodo}>
                <form className="listcontainer_form" autoComplete="off" onSubmit={handleSubmit}>
                    <input type="checkbox" />
                    <input 
                        className="listcontainer_input" 
                        type="text" placeholder="Enter new Item..." 
                        onChange={inputFields} 
                        name="name"
                        value={input}
                    />
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            
            <div className="listcontainer_todo">
                {todos.map((todo, index) => (
                    <div className={`listcontainer_items ${remover ? "remove" : null}`} key={index}>
                        <div className="listcontainer_content" key={todo.id}>
                            <input type="checkbox" />
                            <p>{todo.text}</p>
                        </div>
                        <Ai.AiOutlineClose onClick={removeItem}/>
                    </div>
                ))}

                <div className="listcontainer_list">
                    <p>0 items left</p>
                    <ul>
                        <li><a onClick={addClass} className={ toggleClass ? "active" : null } href="#all">All</a></li>
                        <li><a onClick={addClass} className={ toggleClass ? "active" : null } href="#active">Active</a></li>
                        <li><a onClick={addClass} className={ toggleClass ? "active" : null } href="#completed">Completed</a></li>
                    </ul>
                    <a href="#clear" className={ toggleClass ? "active" : null } onClick={removeItem}>Clear Completed</a>
                </div>
            </div>
        </>
    )
}

export default ListContainer
