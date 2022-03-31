import React, { HtmlHTMLAttributes } from 'react'
import './Input.css'

interface InputProps {
    labelName: string
    onChange: (value: string) => void
}

export default function Input({ labelName, onChange }: InputProps) {
    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        onChange(event.target.value)
    }
    return (
        <div>
            <label>{labelName}</label>
            <input type='text' onChange={handleOnChange} />
        </div>
    )
}
