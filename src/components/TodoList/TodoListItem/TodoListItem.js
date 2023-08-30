import './todo-list-item.css';

const TodoListItem = ({text, important}) => {
    const style = {
        color: important ? "red" : "black"
    }

    return (
           <li className='list-item' style={style}>
            {text}
            
            <span className='item-btns'>
                <button className='item-btn-done'>Done</button>
                <button className='item-btn-important'>important</button>
                <button className='item-btn-remove'>Remove</button>
            </span>
            </li>
    )
}

export default TodoListItem;