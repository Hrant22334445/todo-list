import { Component } from 'react';

import './todo-list-item.css';
import { FaTrash, FaInfo, FaCheck } from 'react-icons/fa6';

class TodoListItem extends Component {
    state = {
        isDone: false,
        isImportant: this.props.important
    }

    onDone = () => {
        this.setState({
            isDone: !this.state.isDone,
        });
    }

    onImportant = () => {
        this.setState({
            isImportant: !this.state.isImportant
        })
    }


    render() {
        const { text } = this.props;
        const { isDone } = this.state;
        const { isImportant } = this.state

        const textStyle = {
            textDecoration: isDone ? "line-through" : "none",
            color: isDone ? '#aaa' : isImportant ? "red" : "black",
            fontWeight: isDone ? "normal" : isImportant ? "bold" : "normal"
        }

        return (
            <li className='list-item'>
             <span className='item-text' style={textStyle} onClick={this.onDone}>
                 {text};
             </span>
             
             
             <span className='item-btns'>
                 <button className='item-btn-done' onClick={ this.onDone }><FaCheck /></button>
                 <button className='item-btn-important' onClick={this.onImportant }><FaInfo /></button>
                 <button className='item-btn-remove'><FaTrash /></button>
             </span>
             </li>
     )
    }
}




export default TodoListItem;