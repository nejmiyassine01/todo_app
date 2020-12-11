import React, { useState } from 'react'
import * as Ai from 'react-icons/ai'
import TodoForm from '../TodoForm/TodoForm';
import './ListContainer.scss'

function ListContainer(props) {
    const [toggleClass, setToggleClass] = useState(false);
    const addClass = () => setToggleClass(!toggleClass);

    const [remover, setRemover] = useState(false);
    const removeItem = () => setRemover(!remover);

    const [todos, setTodos] = useState([])
    const addTodos = (input) => {
        if(!input.text || /^\s*$/.test(input.text)) {
            return;
        }

        const newTodos = [input, ...todos];
        setTodos(newTodos);
        console.log(newTodos);
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

    const removeAllTodos = id => {
        const removeAll = [...todos]

        setTodos(removeAll);
    }
    
    return (
        <>
            <div className="listcontainer">
                <TodoForm onSubmit={addTodos}/>
            </div>
            
            <div className="listcontainer_todo">
                {todos.map((todo, index) => (
                    <div className={`listcontainer_items ${remover ? "remove" : null}`} key={index} >
                        <div className="listcontainer_content" key={todo.id}>
                            <input type="checkbox" />
                            <p>{todo.text}</p>
                        </div>
                        <Ai.AiOutlineClose onClick={() => removeTodo(todo.id)}/>
                    </div>
                ))}
                
                <div className="listcontainer_list">
                    <p>0 items left</p>
                    <ul>
                        <li><a onClick={addClass} className={ toggleClass ? "active" : null } href="#all">All</a></li>
                        <li><a onClick={addClass} className={ toggleClass ? "active" : null } href="#active">Active</a></li>
                        <li><a onClick={addClass} className={ toggleClass ? "active" : null } href="#completed">Completed</a></li>
                    </ul>
                    <a href="#clear" className={ toggleClass ? "active" : null } onClick={() => removeAllTodos()}>Clear Completed</a>
                </div>
            </div>
        </>
    )
}

export default ListContainer
