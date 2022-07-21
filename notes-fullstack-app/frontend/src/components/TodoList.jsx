import TodoItem from './TodoItem'

export default function TodoList({ todoItems, deleteTodoItem, changeStatus }) {
    return (
        <ul className='p-4 w-1/4'>
            {todoItems.map((item) => (
                <TodoItem key={item.text} item={item} deleteTodoItem={deleteTodoItem} changeStatus={changeStatus} />
            ))}
        </ul>
    )
}
