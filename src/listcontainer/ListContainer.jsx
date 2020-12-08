import React from 'react'
import * as Ai from 'react-icons/ai'
import './ListContainer.scss'

function ListContainer() {
    return (
        <>
            <div className="listcontainer">
                <form className="listcontainer_form" autocomplete="off">
                    <input type="checkbox" />
                    <input className="listcontainer_input" type="text" placeholder="Enter new Item..." name="name" />
                </form>
            </div>
            
            <div className="listcontainer_todo">
                <div className="listcontainer_items">
                    <div className="listcontainer_content">
                        <input type="checkbox" />
                        <p>Clone this app</p>
                    </div>
                    <Ai.AiOutlineClose/>
                </div>
                <div className="listcontainer_list">
                    <p>0 items left</p>
                    <ul>
                        <li><a className="active" href="#all">All</a></li>
                        <li><a href="#active">Active</a></li>
                        <li><a href="#completed">Completed</a></li>
                    </ul>
                    <a href="#clear">Clear Completed</a>
                </div>
            </div>
        </>
    )
}

export default ListContainer
