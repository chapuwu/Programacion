import React, { useState } from 'react'
import TodoElement from './TodoElement'

export default function Todos() {
    return (
        <div className='flex flex-col'>
            <ul className='w-full'>
                {tareas.map((tarea) => (
                    <TodoElement text={tarea} />
                ))}
            </ul>
        </div>
    )
}
