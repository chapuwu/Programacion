interface TodoElementProps {
    text: string
    onDelete?: (value: string) => void
    onDone?: (value: string) => void
    onEdit?: (value: string) => void
}

function TodoElement({ text, onDelete, onDone, onEdit }: TodoElementProps) {
    return (
        <li>
            {text}
            {onDelete && onDone && onEdit ? (
                <>
                    <button onClick={() => onDone(text)}>✔️</button>
                    <button onClick={() => onDelete(text)}>❌</button>
                    <button onClick={() => onEdit(text)}>✏️</button>
                </>
            ) : null}
        </li>
    )
}

export default TodoElement
