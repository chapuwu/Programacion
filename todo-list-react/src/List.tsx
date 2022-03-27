import TodoElement from './TodoElement'

interface ListProps {
    elements: string[]
    onDelete?: (value: string) => void
    onDone?: (value: string) => void
    onEdit?: (value: string) => void
}

function List({ elements, onDone, onDelete, onEdit }: ListProps) {
    return (
        <ul>
            {elements.map((element) => (
                <TodoElement key={element} text={element} onDelete={onDelete} onDone={onDone} onEdit={onEdit} />
            ))}
        </ul>
    )
}

export default List
