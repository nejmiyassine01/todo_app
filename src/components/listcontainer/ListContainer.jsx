import React, { useState } from 'react'
import * as Ai from 'react-icons/ai'
import TodoForm from '../TodoForm/TodoForm';
import './ListContainer.scss';

function ListContainer() {
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
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }

    const removeAllTodos = () => {
        const removeArr = [...todos].splice();

        setTodos(removeArr);
    }

    // function toggleTodoCompleted(id) {
    //     const updatedTodo = todos.map(todo => {
    //         if (id === todo.id) {
    //             return {...todo, completed: !todo.completed}
    //         }

    //         return todo;
    //     });
    //     setTodos(updatedTodo);
    // }

    const itemNoun = todos.length !== 1 ? 'items' : 'item';
    const itemLeft = `${todos.length} ${itemNoun} left`;

    return (
        <>
            <div className="listcontainer">
                <TodoForm onSubmit={addTodos} />
            </div>
            
            <div className="listcontainer_todo">
                {todos.map((todo, index) => (
                    <div className="listcontainer_items" key={index}>
                        <div className="listcontainer_content" key={todo.id}>
                            {/* <input type="checkbox" defaultChecked={todo.completed} onChange={() => toggleTodoCompleted(todo.id)} /> */}
                            <p>{todo.text}</p>
                        </div>
                        <Ai.AiOutlineClose onClick={() => removeTodo(todo.id)}/>
                    </div>
                ))}
                
                <div className="listcontainer_list">
                    <p>{itemLeft}</p>
                    <a href="#clear" onClick={() => removeAllTodos()}>Clear Completed</a>
                </div>
            </div>
        </>
    )
}

export default ListContainer
