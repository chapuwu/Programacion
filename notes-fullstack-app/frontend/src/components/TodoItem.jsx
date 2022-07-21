import deleteIcon from '../assets/delete.webp'
import doneIcon from '../assets/done.jpg'

export default function TodoItem({ item, deleteTodoItem, changeStatus }) {
    return (
        <li className='uppercase py-2 px-3 m-1 rounded flex justify-between items-center bg-transparent hover:bg-slate-800 transition-colors duration-200'>
            {item.complete ? <p className='text-slate-600'>{item.text}</p> : <p className='text-white'>{item.text}</p>}
            <div className='flex justify-center items-center'>
                <button
                    className='p-1 rounded bg-transparent hover:bg-slate-700 transition-colors duration-200'
                    onClick={() => changeStatus(item)}>
                    <img className='w-5' src={doneIcon} alt='' />
                </button>
                <button
                    className='p-1 rounded bg-transparent hover:bg-slate-700 transition-colors duration-200'
                    onClick={() => deleteTodoItem(item)}>
                    <img className='w-5' src={deleteIcon} alt='' />
                </button>
            </div>
        </li>
    )
}
